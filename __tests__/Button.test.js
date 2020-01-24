import React from 'react'
import { cleanup } from '@testing-library/react'

import { Button } from 'src/components/Button'
import { renderWithThemeProvider } from 'src/utilities/renderWithThemeProvider'

afterEach(cleanup)

describe('Button', () => {
  it('should match snapshot', () => {
    const { asFragment } = renderWithThemeProvider(<Button>Botão</Button>)

    expect(asFragment()).toMatchSnapshot()
  })
})
