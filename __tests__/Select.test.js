import React from 'react'
import { cleanup, render } from '@testing-library/react'

import { Select } from 'src/components/Select'
import { genders } from 'src/constants/genders'

afterEach(cleanup)

describe('Select', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(
      <Select label="Gênero">
        {genders.map(gender => (
          <option key={gender.value} value={gender.value}>
            {gender.description}
          </option>
        ))}
      </Select>
    )

    expect(asFragment()).toMatchSnapshot()
  })
})
