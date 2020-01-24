import React from 'react'
import { cleanup } from '@testing-library/react'

import { Plan } from 'src/components/Plan'
import { plans } from 'src/constants/plans'
import { renderWithThemeProvider } from 'src/utilities/renderWithThemeProvider'

afterEach(cleanup)

describe('Plan', () => {
  it('should match snapshot', () => {
    const { asFragment } = renderWithThemeProvider(<Plan {...plans[0]} />)

    expect(asFragment()).toMatchSnapshot()
  })
})
