import React from 'react'

import { Icon } from '@/src/components/Icon'
import { Stack } from '@/src/components/Stack'

const size2x = {
  height: '2.000rem',
  width: '2.000rem'
}

const size4x = {
  height: '4.000rem',
  width: '4.000rem'
}

export default {
  component: Icon,
  title: 'Icon'
}

export const Default = () => (
  <Stack direction="row">
    <Icon name="profile" />
    <Icon {...size2x} name="profile" />
    <Icon {...size4x} name="profile" />
  </Stack>
)

export const NotFound = () => (
  <Stack direction="row">
    <Icon name="???" />
    <Icon {...size2x} name="???" />
    <Icon {...size4x} name="???" />
  </Stack>
)
