import { createGlobalStyle } from "styled-components"
import { mq, globalVariables } from "./variables"

const GlobalStyle = createGlobalStyle`
    ${globalVariables}

    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    html {
        box-sizing: border-box;
        font-size: 62.5%;

        ${mq.large} {
            font-size:50%;
        }

        ${mq.smallest} {
            font-size:45%;
        }
    }

    body {
        font-family: 'Quicksand', sans-serif;
        font-weight: 400;
        background: var(--color-secondary);
    }
`
export default GlobalStyle
