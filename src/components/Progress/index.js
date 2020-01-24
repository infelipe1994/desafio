import React from 'react'
import PropTypes from 'prop-types'

import { Stack } from '@/src/components/Stack'
import { Step } from '@/src/components/Progress/Step'

export const Progress = ({ currentStep, stepCount }) => (
  <Stack as="ol" direction="row" spaceBetween="x1">
    {new Array(stepCount).fill().map((_, i) => (
      <Step aria-hidden isCurrent={currentStep === i + 1} key={i} />
    ))}
  </Stack>
)

Progress.propTypes = {
  currentStep: PropTypes.number.isRequired,
  stepCount: PropTypes.number.isRequired
}
