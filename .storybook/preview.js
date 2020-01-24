import React from 'react'
import { RouterContext } from 'next/dist/next-server/lib/router-context'
import { ThemeProvider } from 'styled-components'
import { addDecorator } from '@storybook/react'

import { Box } from '@/src/components/Box'
import { Center } from '@/src/components/Center'
import { GlobalStyle } from '@/src/components/GlobalStyle'
import { theme } from '@/src/theme'

addDecorator(storyFn => (
  <RouterContext.Provider value={{ back: () => undefined }}>
    <ThemeProvider theme={theme}>
      <Box padding="x7">
        <Center alsoCenterChildren alsoCenterText>
          {storyFn()}
        </Center>
      </Box>
      <GlobalStyle />
    </ThemeProvider>
  </RouterContext.Provider>
))
