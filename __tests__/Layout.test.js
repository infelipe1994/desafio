import React from 'react'
import { cleanup } from '@testing-library/react'

import { Layout } from 'src/components/Layout'
import {
  ADDRESS_FORM,
  PERSONAL_INFO_FORM,
  REGISTER_FORM_STEP_COUNT
} from 'src/constants/steps'
import { renderWithThemeProvider } from 'src/utilities/renderWithThemeProvider'

afterEach(cleanup)

describe('Layout', () => {
  it('should match snapshot', () => {
    const { asFragment } = renderWithThemeProvider(
      <Layout
        currentStep={PERSONAL_INFO_FORM}
        heading="Cadastro"
        stepCount={REGISTER_FORM_STEP_COUNT}
        subheading="Dados Pessoais"
      />
    )

    expect(asFragment()).toMatchSnapshot()
  })

  it('should match snapshot (can go back)', () => {
    const { asFragment } = renderWithThemeProvider(
      <Layout
        canGoBack
        currentStep={ADDRESS_FORM}
        heading="Cadastro"
        stepCount={REGISTER_FORM_STEP_COUNT}
        subheading="Endereço"
      />
    )

    expect(asFragment()).toMatchSnapshot()
  })
})
