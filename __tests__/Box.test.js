import React from 'react'
import { cleanup, render } from '@testing-library/react'

import { Box } from 'src/components/Box'

afterEach(cleanup)

describe('Box', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<Box>Olá, mundo!</Box>)

    expect(asFragment()).toMatchSnapshot()
  })
})
