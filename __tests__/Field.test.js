import React from 'react'
import { cleanup, render } from '@testing-library/react'

import { Field } from 'src/components/Field'

afterEach(cleanup)

describe('Field', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<Field label="Nome completo" />)

    expect(asFragment()).toMatchSnapshot()
  })
})
