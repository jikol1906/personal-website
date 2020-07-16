import React from "react"
import styles from './headingTwo.module.scss'

export default function HeadingTwo({ inlineStyles, children, otherStyles, underlined, black }) {

  const theStyles = [styles.heading]
  otherStyles && theStyles.push(otherStyles);
  underlined && theStyles.push(styles.underlined)
  black && theStyles.push(styles.headingBlack)

  return <h2 style={inlineStyles} className={theStyles.join(' ')}>{children}</h2>
}
