import React from 'react'

import { Layout } from '@/src/components/Layout'
import { Text } from '@/src/components/Text'
import {
  PLAN_SELECTION_FORM,
  REGISTER_FORM_STEP_COUNT
} from '@/src/constants/steps'

export default {
  component: Layout,
  title: 'Layout'
}

export const Default = () => (
  <Layout
    currentStep={PLAN_SELECTION_FORM}
    heading="Cadastro"
    stepCount={REGISTER_FORM_STEP_COUNT}
    subheading="Endereço"
  >
    <Text>Olá, mundo!</Text>
  </Layout>
)
