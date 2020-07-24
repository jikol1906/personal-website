import { createGlobalStyle } from "styled-components"
import { mq } from "./variables"

const GlobalStyle = createGlobalStyle`
:root {
    //Layout
    --section-intersection-length:15rem;
    --section-padding-top-bottom:30rem;
    --section-padding-left-right:8rem;

    //Colors
    --color-primary: #1a73da;
    --color-primary-2: #1465c2;
    --color-secondary:#f4f4f4;

    ${mq.small} {
        //Layout
        --section-intersection-length:9rem;
        --section-padding-top-bottom:20rem;
        --section-padding-left-right:1rem;
    }
}
`
export default GlobalStyle
