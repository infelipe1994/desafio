import React from 'react'

import { Field } from '@/src/components/Field'
import { Stack } from '@/src/components/Stack'

export default {
  component: Field,
  title: 'Field'
}

export const All = () => (
  <Stack spaceBetween="x6">
    <Field label="Nome completo" />
    <Field disabled label="Nome completo" />
    <Field error label="Nome completo" />
  </Stack>
)
