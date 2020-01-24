import React from 'react'
import { cleanup, render } from '@testing-library/react'

import { Stack } from 'src/components/Stack'

afterEach(cleanup)

describe('Stack', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(
      <Stack>
        <div>Hello, world!</div>
        <div>How are you today?</div>
      </Stack>
    )

    expect(asFragment()).toMatchSnapshot()
  })
})
