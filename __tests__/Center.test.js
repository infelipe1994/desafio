import React from 'react'
import { cleanup, render } from '@testing-library/react'

import { Center } from 'src/components/Center'

afterEach(cleanup)

describe('Center', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<Center>Olá, mundo!</Center>)

    expect(asFragment()).toMatchSnapshot()
  })
})
