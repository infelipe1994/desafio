import React from 'react'
import { cleanup } from '@testing-library/react'

import { UploadProfilePicture } from 'src/components/UploadProfilePicture'
import { renderWithThemeProvider } from 'src/utilities/renderWithThemeProvider'

afterEach(cleanup)

describe('UploadProfilePicture', () => {
  it('should match snapshot', () => {
    const { asFragment } = renderWithThemeProvider(
      <UploadProfilePicture onUploadPicture={jest.fn()} />
    )

    expect(asFragment()).toMatchSnapshot()
  })
})
