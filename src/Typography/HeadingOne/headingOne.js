import React from "react"

import styled from "styled-components"

const StyledHeadingOne = styled.h1`
  font-size: 6rem;
  text-transform: uppercase;
  color: #fff;
  font-weight: 400;
  letter-spacing: 0.7rem;
  ${({animation}) => animation && animation}
`

export default function HeadingOne({ animation, children }) {
  return <StyledHeadingOne animation={animation}>{children}</StyledHeadingOne>
}
