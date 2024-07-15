import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        box-sizing: border-box;
        font-family: 'Raleway', sans-serif;
    }

    body {
        background: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.text};
        transition: all 0.2s linear;
    }

    button,
    a {
        cursor: pointer;
        font-family: 'Raleway', sans-serif;
        text-decoration: none;
    }
`
