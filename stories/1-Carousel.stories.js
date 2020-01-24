import React from 'react'

import { Carousel } from '@/src/components/Carousel'
import { Center } from '@/src/components/Center'
import { Plan } from '@/src/components/Plan'
import { plans } from '@/src/constants/plans'

export default {
  component: Carousel,
  title: 'Carousel'
}

export const Default = () => (
  <Center alsoCenterChildren>
    <Carousel width="20rem">
      {plans.map(({ id, ...rest }) => (
        <Plan {...rest} key={id} />
      ))}
    </Carousel>
  </Center>
)
