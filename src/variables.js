import { css } from "styled-components"

export const breakpoints = {
  bpLargest: "75em",
  bpLarge: "62.5em",
  bpMedium: "50em",
  bpSmall: "37.5em",
  bpSmallest: "25em",
}

export const mq = {
  large: `@media only screen and (max-width: ${breakpoints.bpLarge})`,
  largest: `@media only screen and (max-width: ${breakpoints.bpLargest})`,
  smallest: `@media only screen and (max-width: ${breakpoints.bpSmallest})`,
  small: `@media only screen and (max-width: ${breakpoints.bpSmall})`,
}

export const globalVariables = css`
  :root {
    //Layout
    --section-intersection-length: 15rem;
    --section-padding-top-bottom: 30rem;
    --section-padding-left-right: 8rem;

    //Colors
    --color-primary: #1a73da;
    --color-primary-2: #1465c2;

    --color-secondary: #f4f4f4;
    --color-secondary-2: #e4e4e4;

    ${mq.small} {
      //Layout
      --section-intersection-length: 9rem;
      --section-padding-top-bottom: 20rem;
      --section-padding-left-right: 1rem;
    }
  }
`
