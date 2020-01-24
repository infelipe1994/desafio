import React from 'react'
import App from 'next/app'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from '@/src/components/GlobalStyle'
import { RegisterFormContainer } from '@/src/containers/RegisterForm'
import { theme } from '@/src/theme'

export default class extends App {
  componentDidMount() {
    if (process.env.NODE_ENV === 'production') {
      return
    }

    const axe = require('react-axe')
    const ReactDOM = require('react-dom')

    axe(React, ReactDOM, 1000)
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <ThemeProvider theme={theme}>
        <>
          <RegisterFormContainer.Provider>
            <Component {...pageProps} />
          </RegisterFormContainer.Provider>
          <GlobalStyle />
        </>
      </ThemeProvider>
    )
  }
}
