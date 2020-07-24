import React from "react"
import styles from "./headingTwo.module.scss"

import styled from "styled-components"

const StyledHeadingOne = styled.h1`
  font-size: 6rem;
  text-transform: uppercase;
  color: #fff;
  font-weight: 300;
  letter-spacing: 0.7rem;
  ${({ animation }) => animation && animation}
`

export default function HeadingTwo({
  inlineStyles,
  children,
  otherStyles,
  underlined,
  black,
}) {
  const theStyles = [styles.heading]
  otherStyles && theStyles.push(otherStyles)
  underlined && theStyles.push(styles.underlined)
  black && theStyles.push(styles.headingBlack)

  return (
    <h2 style={inlineStyles} className={theStyles.join(" ")}>
      {children}
    </h2>
  )
}
