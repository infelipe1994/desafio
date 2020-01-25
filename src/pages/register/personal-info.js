import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'

import { Field } from '@/src/components/Field'
import { Form } from '@/src/components/Form'
import { Layout } from '@/src/components/Layout'
import { Select } from '@/src/components/Select'
import { UploadProfilePicture } from '@/src/components/UploadProfilePicture'
import { genders } from '@/src/constants/genders'
import { ADDRESS_FORM } from '@/src/constants/steps'
import { validations } from '@/src/constants/validations'
import { RegisterFormContainer } from '@/src/containers/RegisterForm'
import { formatCpf } from '@/src/utilities/formatCpf'
import { formatDate } from '@/src/utilities/formatDate'
import { formatPhone } from '@/src/utilities/formatPhone'

const PersonalInfo = () => {
  const {
    currentStep,
    formData,
    setCurrentStep,
    setPersonalInfoData,
    STEP_COUNT
  } = RegisterFormContainer.useContainer()
  const { errors, formState, handleSubmit, register, watch } = useForm({
    defaultValues: formData.personalInfo,
    mode: 'onBlur'
  })
  const { push } = useRouter()
  const [pictureSrc, setPictureSrc] = useState(formData.personalInfo.pictureSrc)
  const { isSubmitting, isValid } = formState
  const onSubmit = data => {
    setCurrentStep(ADDRESS_FORM)
    setPersonalInfoData({ ...data, pictureSrc })
    push('/register/address')
  }

  return (
    <Layout
      currentStep={currentStep}
      heading="Cadastro"
      stepCount={STEP_COUNT}
      subheading="Dados Pessoais"
    >
      <Form
        disabled={isSubmitting || !isValid}
        onSubmit={handleSubmit(onSubmit)}
      >
        <UploadProfilePicture
          onUploadPicture={src => {
            alert('Sua foto de perfil enviada com sucesso.')
            setPictureSrc(src)
          }}
          pictureSrc={pictureSrc}
        />
        <Field
          error={!!errors.fullName}
          inputRef={register({ ...validations.personalInfo.fullName })}
          label="Nome completo"
          name="fullName"
        />
        <Field
          error={!!errors.cpf}
          inputRef={register({ ...validations.personalInfo.cpf })}
          label="CPF"
          name="cpf"
          onChange={event =>
            (event.target.value = formatCpf(event.target.value))
          }
        />
        <Field
          error={!!errors.phone}
          inputRef={register({ ...validations.personalInfo.phone })}
          label="Celular"
          name="phone"
          onChange={event =>
            (event.target.value = formatPhone(event.target.value))
          }
          type="tel"
        />
        <Field
          error={!!errors.dateOfBirth}
          inputRef={register}
          label="Data de nascimento"
          name="dateOfBirth"
          onChange={event =>
            (event.target.value = formatDate(event.target.value))
          }
          type="date"
        />
        <Select
          defaultValue={watch('gender')}
          error={!!errors.gender}
          inputRef={register}
          label="Gênero"
          name="gender"
        >
          {genders.map(gender => (
            <option key={gender.value} value={gender.value}>
              {gender.description}
            </option>
          ))}
        </Select>
      </Form>
    </Layout>
  )
}

export default PersonalInfo
