import React from "react"

import Img from "gatsby-image"
import HeadingThree from "../../Typography/HeadingThree/HeadingThree"
import styled from "styled-components"
import { shadows } from '../../variables'

const StyledCard = styled.div`
  background: #fff;
  padding: 8rem;
  display: grid;
  border-radius: 10px;
  box-shadow: ${shadows.shadowLight};
  justify-items: center;
  align-items: center;
  grid-gap: 2rem;

  p {
    font-size: 1.6rem;
    text-align: center;
  }
`

export default function Card({ img, title, text }) {
  return (
    <StyledCard>
      <HeadingThree black>{title}</HeadingThree>
      <Img fixed={img} />
    </StyledCard>
  )
}
