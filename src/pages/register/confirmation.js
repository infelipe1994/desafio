import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

import { Box } from '@/src/components/Box'
import { Center } from '@/src/components/Center'
import { Icon } from '@/src/components/Icon'
import { Layout } from '@/src/components/Layout'
import { Stack } from '@/src/components/Stack'
import { Text } from '@/src/components/Text'
import { PLAN_SELECTION_FORM } from '@/src/constants/steps'
import { RegisterFormContainer } from '@/src/containers/RegisterForm'
import { theme } from '@/src/theme'

const iconSize = {
  height: '7.000rem',
  width: '7.000rem'
}

const Confirmation = () => {
  const {
    formData,
    isFinished,
    STEP_COUNT
  } = RegisterFormContainer.useContainer()
  const { replace } = useRouter()
  const isCorrectStep = isFinished

  useEffect(() => {
    if (!isCorrectStep) {
      alert('Retornando para o primeiro passo.')
      replace('/register/personal-info')
    }

    console.log(formData)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return !isCorrectStep ? null : (
    <Layout
      currentStep={PLAN_SELECTION_FORM}
      heading="Cadastro"
      stepCount={STEP_COUNT}
    >
      <Box paddingTop="x9">
        <Center alsoCenterText>
          <Stack spaceBetween="x5">
            <Icon
              {...iconSize}
              color={theme.colors.green}
              name="check"
              style={{ margin: '0 auto' }}
            />
            <Stack>
              <Text
                color="green"
                fontSize="x4"
                fontWeight="x3"
                lineHeight="x4"
                textTransform="uppercase"
              >
                Cadastro concluído
              </Text>
              <Text color="ocean" fontSize="x2" fontWeight="x3" lineHeight="x2">
                Acesse a sua conta e comece a se exercitar agora mesmo!
              </Text>
            </Stack>
          </Stack>
        </Center>
      </Box>
    </Layout>
  )
}

export default Confirmation
