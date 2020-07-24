import React from "react"
import styles from "./header.module.scss"
import HeadingOne from "../../Typography/HeadingOne/headingOne"
import HeadingTwo from "../../Typography/HeadingTwo/headingTwo"
import {moveInLeftAnimation} from '../../animations'

export default function Header() {
  return (
    <>
    <div className={styles.background}></div>
    <header id="home" className={styles.header}>
      
      <HeadingOne animation={moveInLeftAnimation}>Boris Grunwald</HeadingOne>
      <HeadingTwo underlined otherStyles={styles.subheading}>
        Software Developer
      </HeadingTwo>
    </header>
    </>
  )
}
