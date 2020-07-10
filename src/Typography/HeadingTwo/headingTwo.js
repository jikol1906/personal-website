import React from "react"
import styles from './headingTwo.module.scss'

export default function HeadingTwo({ children, otherStyles, underlined }) {

  const theStyles = [styles.heading]
  otherStyles && theStyles.push(otherStyles);
  underlined && theStyles.push(styles.underlined)

  return <h2 className={theStyles.join(' ')}>{children}</h2>
}
