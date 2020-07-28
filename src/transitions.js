import { css } from "styled-components"

export const fadeInExited = css`
    opacity:0;
`

export const fadeInLeftCornerExited = css`
    ${fadeInExited}
    transform:translate(-10rem,-10rem);   
`  

export const fadeInEntered = css`
    transition: opacity .5s, transform .5s;
    opacity:1;
    transform:translate(0,0);
`