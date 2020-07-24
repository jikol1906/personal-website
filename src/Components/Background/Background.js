import React from "react"
import styled, { css } from "styled-components"

const StyledBackground = styled.div`
  grid-column: full-start / full-end;
  background-image: linear-gradient(to bottom right, #1a73da, #1a73da);
  grid-row: 1/3;
clip-path: ${props => {
  if (props.header)
    return css`polygon(0 0, 100% 0, 100% calc(100vh - var(--section-intersection-length)), 0 100%);`
}}
  z-index: 2;
`

export default function Background({ header }) {
  return <StyledBackground header={header} />
}
