import React from 'react'
import { ThemeProvider } from 'styled-components'

import { render } from '@testing-library/react'

import { theme } from '@/src/theme'

export const renderWithThemeProvider = Component =>
  render(<ThemeProvider theme={theme}>{Component}</ThemeProvider>)
