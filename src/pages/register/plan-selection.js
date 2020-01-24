import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { Button } from '@/src/components/Button'
import { Carousel } from '@/src/components/Carousel'
import { Layout } from '@/src/components/Layout'
import { Plan } from '@/src/components/Plan'
import { Stack } from '@/src/components/Stack'
import { Text } from '@/src/components/Text'
import { plans } from '@/src/constants/plans'
import { PERSONAL_INFO_FORM, PLAN_SELECTION_FORM } from '@/src/constants/steps'
import { RegisterFormContainer } from '@/src/containers/RegisterForm'

const PlanSelection = () => {
  const { push, replace } = useRouter()
  const [selectedPlan, setSelectedPlan] = useState(0)
  const registerFormContainer = RegisterFormContainer.useContainer()
  const isCorrectStep =
    registerFormContainer.currentStep === PLAN_SELECTION_FORM

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
      currentStep={PLAN_SELECTION_FORM}
      heading="Cadastro"
      stepCount={registerFormContainer.STEP_COUNT}
      subheading="Planos"
    >
      <Stack spaceBetween="x4">
        <Text as="h3" fontSize="x3" lineHeight="x2" textAlign="center">
          Escolha seu plano
        </Text>
        <Carousel
          aria-label="Planos disponíveis."
          currentSlide={selectedPlan}
          onChangeSlide={setSelectedPlan}
        >
          {plans.map(({ id, ...rest }) => (
            <Plan {...rest} key={id} />
          ))}
        </Carousel>
        <Button
          isFullWidth
          onClick={() => {
            registerFormContainer.setCurrentStep(PERSONAL_INFO_FORM)
            registerFormContainer.setFinished(true)
            registerFormContainer.setPlanSelectionData({ selectedPlan })
            push('/register/confirmation')
          }}
        >
          Avançar
        </Button>
      </Stack>
    </Layout>
  )
}

export default PlanSelection
