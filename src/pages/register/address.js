import React, { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'

import { Field } from '@/src/components/Field'
import { Form } from '@/src/components/Form'
import { Layout } from '@/src/components/Layout'
import { defaultValues } from '@/src/constants/defaultValues'
import { MASKED_CEP_LENGTH } from '@/src/constants/lengths'
import { ADDRESS_FORM, PLAN_SELECTION_FORM } from '@/src/constants/steps'
import { RegisterFormContainer } from '@/src/containers/RegisterForm'
import { fetchAddressByCep } from '@/src/services/address'
import { formatCep } from '@/src/utilities/formatCep'
import { replaceNotNumber } from '@/src/utilities/replaceNotNumber'

const ADDRESS_DICTIONARY = {
  city: 'localidade',
  detail: 'complemento',
  neighborhood: 'bairro',
  state: 'uf',
  street: 'logradouro'
}

const Address = () => {
  const {
    errors,
    formState,
    handleSubmit,
    register,
    setValue,
    triggerValidation
  } = useForm({
    defaultValues: defaultValues.address,
    mode: 'onBlur'
  })
  const { push, replace } = useRouter()
  const [addressData, setAddressData] = useState()
  const { isSubmitting, isValid } = formState
  const onSubmit = data => {
    registerFormContainer.setAddressData(data)
    registerFormContainer.setCurrentStep(PLAN_SELECTION_FORM)
    push('/register/plan-selection')
  }
  const registerFormContainer = RegisterFormContainer.useContainer()
  const isCorrectStep = registerFormContainer.currentStep === ADDRESS_FORM
  const required = register({ required: true })
  const setValues = useCallback(
    (from, to, shouldValidate) => {
      Object.entries(from).forEach(entry => {
        setValue(entry[0], to[entry[1]])

        if (shouldValidate) {
          triggerValidation(entry[0])
        }
      })
    },
    [setValue, triggerValidation]
  )

  useEffect(() => {
    if (addressData) {
      setValues(ADDRESS_DICTIONARY, addressData, true)
    }
  }, [addressData, setValues])

  useEffect(() => {
    if (!isCorrectStep) {
      alert('Retornando para o primeiro passo.')
      replace('/register/personal-info')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return !isCorrectStep ? null : (
    <Layout
      canGoBack
      currentStep={ADDRESS_FORM}
      heading="Cadastro"
      stepCount={registerFormContainer.STEP_COUNT}
      subheading="Endereço"
    >
      <Form
        disabled={isSubmitting || !isValid}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Field
          error={!!errors.cep}
          inputRef={required}
          label="CEP"
          name="cep"
          onChange={async event => {
            event.target.value = formatCep(event.target.value)
            const cep = event.target.value

            if (cep.length === MASKED_CEP_LENGTH) {
              const data = await fetchAddressByCep(replaceNotNumber(cep))

              if (data.erro) {
                alert('CEP não encontrado.')
              } else {
                setAddressData(data)
              }
            } else {
              setValues(ADDRESS_DICTIONARY, defaultValues.address)
            }
          }}
        />
        <Field
          error={!!errors.street}
          inputRef={required}
          label="Endereço"
          name="street"
        />
        <Field
          error={!!errors.number}
          inputRef={required}
          label="Número"
          name="number"
        />
        <Field
          error={!!errors.detail}
          inputRef={register}
          label="Complemento"
          name="detail"
        />
        <Field
          error={!!errors.neighborhood}
          inputRef={required}
          label="Bairro"
          name="neighborhood"
        />
        <Field
          disabled
          error={!!errors.city}
          inputRef={required}
          label="Cidade"
          name="city"
        />
        <Field
          disabled
          error={!!errors.state}
          inputRef={required}
          label="Estado"
          name="state"
        />
      </Form>
    </Layout>
  )
}

export default Address
