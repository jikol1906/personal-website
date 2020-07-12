import React from "react"
import styles from "./header.module.scss"
import HeadingOne from "../../Typography/HeadingOne/headingOne"
import HeadingTwo from "../../Typography/HeadingTwo/headingTwo"

export default function Header() {
  return (
    <header id="home" className={styles.header}>
      {/* <h1 className="heading-1 header__heading-1">Boris Grunwald</h1> */}
      <HeadingOne otherStyles={styles.heading}>Boris Grunwald</HeadingOne>
      <HeadingTwo underlined otherStyles={styles.subheading}>
        Software Developer
      </HeadingTwo>
    </header>
  )
}
