import { useState } from 'react'
import { createContainer } from 'unstated-next'

import { defaultValues } from '@/src/constants/defaultValues'
import {
  PERSONAL_INFO_FORM,
  REGISTER_FORM_STEP_COUNT
} from '@/src/constants/steps'

const useRegisterFormContainer = (initialState = { ...defaultValues }) => {
  const [currentStep, setCurrentStep] = useState(PERSONAL_INFO_FORM)
  const [isFinished, setFinished] = useState(false)
  const [formData, setFormData] = useState(initialState)

  const setAddressData = address =>
    setFormData(previousData => ({ ...previousData, address }))
  const setPersonalInfoData = personalInfo =>
    setFormData(previousData => ({ ...previousData, personalInfo }))
  const setPlanSelectionData = planSelection =>
    setFormData(previousData => ({ ...previousData, planSelection }))

  return {
    STEP_COUNT: REGISTER_FORM_STEP_COUNT,
    currentStep,
    formData,
    isFinished,
    setAddressData,
    setCurrentStep,
    setFinished,
    setPersonalInfoData,
    setPlanSelectionData
  }
}

export const RegisterFormContainer = createContainer(useRegisterFormContainer)
