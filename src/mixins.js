import { css } from "styled-components"

export const box = (height, width = height) => css`
  height: ${height};
  width: ${width};
`

export const absoluteCenterVertical = () => css`
    position:absolute;
    top:50%;
    transform: translateY(-50%);
`

export const absPos = (top,bottom,left,right) => css`
    position:absolute;
    ${top && `top: ${top}`}
    ${right && `right: ${right}`}
    ${bottom && `bottom: ${bottom}`}
    ${left && `left: ${left}`}
`