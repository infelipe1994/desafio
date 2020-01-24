import React from 'react'
import PropTypes from 'prop-types'

import { Button } from '@/src/components/Button'
import { Stack } from '@/src/components/Stack'

export const Form = ({ children, disabled, onSubmit }) => (
  <Stack as="form" onSubmit={onSubmit} spaceBetween="x7">
    <Stack spaceBetween="x6">{children}</Stack>
    <Button disabled={disabled} isFullWidth>
      Avançar
    </Button>
  </Stack>
)

Form.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired
}
