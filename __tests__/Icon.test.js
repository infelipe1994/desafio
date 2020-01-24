import React from 'react'
import { cleanup, render } from '@testing-library/react'

import { Icon } from 'src/components/Icon'

afterEach(cleanup)

describe('Icon', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<Icon name="chevronDown" />)

    expect(asFragment()).toMatchSnapshot()
  })
})
