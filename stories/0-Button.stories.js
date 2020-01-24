import React from 'react'
import { action } from '@storybook/addon-actions'

import { Button } from '@/src/components/Button'
import { Stack } from '@/src/components/Stack'

export default {
  component: Button,
  title: 'Button'
}

export const All = () => (
  <>
    <Stack direction="row">
      <Button onClick={action('clicked')}>Button</Button>
      <Button disabled onClick={action('clicked')}>
        Button
      </Button>
      <Button isOutlined onClick={action('clicked')}>
        Button
      </Button>
      <Button disabled isOutlined onClick={action('clicked')}>
        Button
      </Button>
    </Stack>
  </>
)
