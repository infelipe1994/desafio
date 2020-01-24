import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    color: ${({ theme }) => theme.colors.black};
    font-family: 'Source Sans Pro', -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    font-weight: ${({ theme }) => theme.fontWeights.x2};
    margin: 0;
    outline: 0;
    padding: 0;
  }

  ol, ul {
    list-style: none;
  }
`
