import React, { useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'

import { withTranslation } from '@/i18n'
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

const Address = ({ t }) => {
  const {
    currentStep,
    formData,
    setAddressData,
    setCurrentStep,
    STEP_COUNT
  } = RegisterFormContainer.useContainer()
  const {
    errors,
    formState,
    handleSubmit,
    register,
    setValue,
    triggerValidation
  } = useForm({
    defaultValues: formData.address,
    mode: 'onBlur'
  })
  const { push, replace } = useRouter()
  const [fetchedAddress, setFetchedAddress] = useState()
  const { isSubmitting, isValid } = formState
  const onSubmit = data => {
    setAddressData(data)
    setCurrentStep(PLAN_SELECTION_FORM)
    push('/register/plan-selection')
  }
  const isCorrectStep = currentStep >= ADDRESS_FORM
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
    if (fetchedAddress) {
      setValues(ADDRESS_DICTIONARY, fetchedAddress, true)
    }
  }, [fetchedAddress, setValues])

  useEffect(() => {
    if (!isCorrectStep) {
      alert(t('Retornando para o primeiro passo.'))
      replace('/register/personal-info')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return !isCorrectStep ? null : (
    <Layout
      canGoBack
      currentStep={ADDRESS_FORM}
      heading={t('Cadastro')}
      stepCount={STEP_COUNT}
      subheading={t('Endereço')}
    >
      <Form
        disabled={isSubmitting || !isValid}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Field
          error={!!errors.cep}
          inputRef={required}
          label={t('CEP')}
          name="cep"
          onChange={async event => {
            event.target.value = formatCep(event.target.value)
            const cep = event.target.value

            if (cep.length === MASKED_CEP_LENGTH) {
              const fetchedData = await fetchAddressByCep(replaceNotNumber(cep))

              if (fetchedData.erro) {
                alert(t('CEP não encontrado.'))
              } else {
                setFetchedAddress(fetchedData)
              }
            } else {
              setValues(ADDRESS_DICTIONARY, defaultValues.address)
            }
          }}
        />
        <Field
          error={!!errors.street}
          inputRef={required}
          label={t('Endereço')}
          name="street"
        />
        <Field
          error={!!errors.number}
          inputRef={required}
          label={t('Número')}
          name="number"
        />
        <Field
          error={!!errors.detail}
          inputRef={register}
          label={t('Complemento')}
          name="detail"
        />
        <Field
          error={!!errors.neighborhood}
          inputRef={required}
          label={t('Bairro')}
          name="neighborhood"
        />
        <Field
          disabled
          error={!!errors.city}
          inputRef={required}
          label={t('Cidade')}
          name="city"
        />
        <Field
          disabled
          error={!!errors.state}
          inputRef={required}
          label={t('Estado')}
          name="state"
        />
      </Form>
    </Layout>
  )
}

Address.propTypes = {
  t: PropTypes.func.isRequired
}

export default withTranslation('common')(Address)
