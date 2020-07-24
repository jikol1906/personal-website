import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
:root {
    //Layout
    --section-intersection-length:15rem;
    --section-padding-top-bottom:30rem;
    --section-padding-left-right:8rem;

    //Colors
    --color-secondary:#f4f4f4;

    @media only screen and (max-width:$bp-small) {
        //Layout
        --section-intersection-length:9rem;
        --section-padding-top-bottom:20rem;
        --section-padding-left-right:1rem;
    }
}
`
export default GlobalStyle
