import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Box } from '@/src/components/Box'
import { Center } from '@/src/components/Center'
import { Icon } from '@/src/components/Icon'
import { Separator } from '@/src/components/Plan/Separator'
import { Stack } from '@/src/components/Stack'
import { Text } from '@/src/components/Text'

const Gif = styled.img`
  height: 8rem;
  margin-left: auto;
  margin-right: auto;
  width: 8rem;
`

export const Plan = ({ availability, gif, name, price }) => (
  <Box backgroundColor="white" paddingBottom="x5" paddingTop="x4" px="x3">
    <Center alsoCenterText>
      <Stack spaceBetween="x3">
        <Stack>
          <Text
            as="h3"
            color="green"
            fontSize="x5"
            fontWeight="x3"
            lineHeight="x5"
            textTransform="uppercase"
          >
            {name}
          </Text>
          <Stack direction="row" justifyContent="center" spaceBetween="x4">
            <Icon height="2.000rem" name="smartFit" width="2.000rem" />
            <Icon height="0.625rem" name="plusSign" width="0.625rem" />
            <Icon height="1.625rem" name="bioRitmo" width="2.500rem" />
          </Stack>
        </Stack>
        <Separator />
        <Stack spaceBetween="x5">
          <Stack spaceBetween="x2">
            <Text color="ocean" fontWeight="x3" textTransform="uppercase">
              Plano Fit +
            </Text>
            <Text fontSize="x2" lineHeight="x2">
              <Text as="span" fontWeight="x3">
                Bio Ritmo:{' '}
              </Text>
              {availability}
            </Text>
          </Stack>
          {!!gif && <Gif src={gif} />}
          <Text color="ocean" fontWeight="x3" textTransform="uppercase">
            {price}
          </Text>
        </Stack>
      </Stack>
    </Center>
  </Box>
)

Plan.propTypes = {
  availability: PropTypes.string.isRequired,
  gif: PropTypes.string,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired
}
