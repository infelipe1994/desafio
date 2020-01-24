import React from 'react'

import { Plan } from '@/src/components/Plan'
import { plans } from '@/src/constants/plans'

export default {
  component: Plan,
  title: 'Plan'
}

export const Default = () => <Plan {...plans[0]} />
