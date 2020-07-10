import React from "react"
import styles from "./headingOne.module.scss"

export default function HeadingOne({ otherStyles, children }) {
  
  const theStyles = [styles.heading]

  if (otherStyles) {
    theStyles.push(otherStyles)
  }

  return <h1 className={theStyles.join(" ")}>{children}</h1>
}
