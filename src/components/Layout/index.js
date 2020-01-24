import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import Div100Vh from 'react-div-100vh'
import { PageTransition } from 'next-page-transitions'

import { Box } from '@/src/components/Box'
import { Center } from '@/src/components/Center'
import { Icon } from '@/src/components/Icon'
import { Progress } from '@/src/components/Progress'
import { Text } from '@/src/components/Text'
import { theme } from '@/src/theme'

const Container = styled(Div100Vh)`
  display: flex;
  flex-direction: column;

  & > footer,
  & > header {
    flex-shrink: 0;
  }

  & > main {
    flex-grow: 1;
  }
`

const Back = styled(Icon)`
  left: ${theme.space.x5};
  position: absolute;
  top: ${theme.space.x1};
`

const ANIMATION_DELAY = 500

const arrowLeftSize = { height: '1.000rem', width: '1.500rem' }

export const Layout = ({
  canGoBack,
  children,
  currentStep,
  heading,
  stepCount,
  subheading
}) => {
  const { back, route } = useRouter()

  return (
    <>
      <Head>
        <title>
          {heading} {subheading ? `- ${subheading}` : ''}
        </title>
      </Head>
      <Container>
        <Box as="header" height="6.000rem" py="x5">
          <Center alsoCenterText style={{ position: 'relative' }}>
            {canGoBack && (
              <Back
                {...arrowLeftSize}
                color={theme.colors.water}
                name="arrowLeft"
                onClick={() => back()}
              />
            )}
            <Text as="h1" fontSize="x5" fontWeight="x1" lineHeight="x4">
              {heading}
            </Text>
            <Text as="h2" color="water" fontSize="x4" lineHeight="x3">
              {subheading}
            </Text>
          </Center>
        </Box>
        <Box
          as="main"
          backgroundColor="smoke"
          overflowY="auto"
          paddingBottom="x4"
          paddingTop="x7"
          px="x8"
        >
          <PageTransition
            classNames="page-transition"
            timeout={ANIMATION_DELAY}
          >
            <Center key={route}>{children}</Center>
          </PageTransition>
        </Box>
        <Box as="footer" display="flex" justifyContent="center" py="x4">
          <Progress currentStep={currentStep} stepCount={stepCount} />
        </Box>
      </Container>
      <style jsx global>{`
        .page-transition-enter {
          opacity: 0;
        }

        .page-transition-enter-active {
          opacity: 1;
          transition: opacity ${ANIMATION_DELAY}ms;
        }

        .page-transition-exit {
          opacity: 1;
        }

        .page-transition-exit-active {
          opacity: 0;
          transition: opacity ${ANIMATION_DELAY}ms;
        }
      `}</style>
    </>
  )
}

Layout.propTypes = {
  canGoBack: PropTypes.bool,
  children: PropTypes.node,
  currentStep: PropTypes.number.isRequired,
  heading: PropTypes.string.isRequired,
  stepCount: PropTypes.number.isRequired,
  subheading: PropTypes.string
}
