import { css, keyframes } from "styled-components"

const moveInLeft = keyframes`
    0% {
      opacity: 0;
      transform: translateX(-10rem);
    }
  
    100% {
      opacity: 1;
      transform: translate(0);
    }
`

export const moveInLeftAnimation = css`
    animation: ${moveInLeft} 1s ease-in-out .3s both
`
