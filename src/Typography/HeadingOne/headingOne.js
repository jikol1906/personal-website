import React from "react"

import styled from "styled-components"

const StyledHeadingOne = styled.h1`
  font-size: 6rem;
  text-transform: uppercase;
  color: #fff;
  font-weight: 300;
  letter-spacing: 0.7rem;
  ${props => props.animation && props.animation}
`

export default function HeadingOne({ animation, children }) {
  return <StyledHeadingOne animation={animation}>{children}</StyledHeadingOne>
}
