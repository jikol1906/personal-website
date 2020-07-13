import React from "react"
import styles from "./header.module.scss"
import HeadingOne from "../../Typography/HeadingOne/headingOne"
import HeadingTwo from "../../Typography/HeadingTwo/headingTwo"

export default function Header() {
  return (
    <header id="home" className={styles.header}>
      
      <HeadingOne otherStyles={styles.heading}>Boris Grunwald</HeadingOne>
      <HeadingTwo underlined otherStyles={styles.subheading}>
        Software Developer
      </HeadingTwo>
    </header>
  )
}
