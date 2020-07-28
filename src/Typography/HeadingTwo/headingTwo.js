import React from "react"
import styles from "./headingTwo.module.scss"

import styled,{css} from "styled-components"

export const StyledHeadingTwo = styled.h2`
  font-size: 4rem;
  color: ${({black}) => black ? '#000' : '#fff'};
  font-weight: 300;
  letter-spacing: .5rem;
  text-transform: uppercase;
  ${({underlined}) => underlined && css`border-bottom: 1px solid currentColor;`}
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
