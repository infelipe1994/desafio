import React from 'react'
import Document, { Head, Html, Main, NextScript } from 'next/document'

import { ServerStyleSheet } from 'styled-components'
import 'isomorphic-unfetch'

export default class extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <link href="/favicon.ico" rel="shortcut icon" type="image/x-icon" />
          <link href="/touch-icon-iphone-60x60.png" rel="apple-touch-icon" />
          <link
            href="/touch-icon-ipad-76x76.png"
            rel="apple-touch-icon"
            sizes="60x60"
          />
          <link
            href="/touch-icon-iphone-retina-120x120.png"
            rel="apple-touch-icon"
            sizes="114x114"
          />
          <link
            href="/touch-icon-ipad-retina-152x152.png"
            rel="apple-touch-icon"
            sizes="144x144"
          />
          <link href="/manifest.webmanifest" rel="manifest" />
          <link
            href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700,900&display=swap"
            rel="preconnect"
          />
          <meta content="#00ba9f" name="theme-color" />
          <meta
            content="App para cadastro de novos usuários."
            name="description"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
