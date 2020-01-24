import React from 'react'

import { Select } from '@/src/components/Select'
import { Stack } from '@/src/components/Stack'
import { genders } from '@/src/constants/genders'

export default {
  component: Select,
  title: 'Select'
}

export const All = () => (
  <Stack spaceBetween="x6">
    <Select label="Gênero">
      {genders.map(gender => (
        <option key={gender.value} value={gender.value}>
          {gender.description}
        </option>
      ))}
    </Select>
    <Select disabled label="Gênero">
      {genders.map(gender => (
        <option key={gender.value} value={gender.value}>
          {gender.description}
        </option>
      ))}
    </Select>
    <Select error label="Gênero">
      {genders.map(gender => (
        <option key={gender.value} value={gender.value}>
          {gender.description}
        </option>
      ))}
    </Select>
  </Stack>
)
