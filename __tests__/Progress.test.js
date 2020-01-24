import React from 'react'
import { cleanup } from '@testing-library/react'

import { Progress } from 'src/components/Progress'
import { REGISTER_FORM_STEP_COUNT } from 'src/constants/steps'
import { renderWithThemeProvider } from 'src/utilities/renderWithThemeProvider'

afterEach(cleanup)

describe('Progress', () => {
  it('should match snapshot', () => {
    const { asFragment } = renderWithThemeProvider(
      <Progress currentStep={1} stepCount={REGISTER_FORM_STEP_COUNT} />
    )

    expect(asFragment()).toMatchSnapshot()
  })
})
