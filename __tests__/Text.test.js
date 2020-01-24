import React from 'react'
import { cleanup, render } from '@testing-library/react'

import { Text } from 'src/components/Text'

afterEach(cleanup)

describe('Text', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<Text>Olá, mundo!</Text>)

    expect(asFragment()).toMatchSnapshot()
  })
})
