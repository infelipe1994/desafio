import React from 'react'
import PropTypes from 'prop-types'

import { withTranslation } from '@/i18n'
import { Button } from '@/src/components/Button'
import { Stack } from '@/src/components/Stack'

export const Form = withTranslation('common')(
  ({ children, disabled, onSubmit, t }) => (
    <Stack as="form" onSubmit={onSubmit} spaceBetween="x7">
      <Stack spaceBetween="x6">{children}</Stack>
      <Button disabled={disabled} isFullWidth>
        {t('Avançar')}
      </Button>
    </Stack>
  )
)
Form.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired
}
