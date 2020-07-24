import React from "react"
import styles from "./header.module.scss"
import HeadingOne from "../../Typography/HeadingOne/headingOne"
import HeadingTwo from "../../Typography/HeadingTwo/headingTwo"
import {moveInLeftAnimation} from '../../animations'
import Background from '../Background/Background'

export default function Header() {
  return (
    <>
    <Background header/>
    <header id="home" className={styles.header}>
      
      <HeadingOne animation={moveInLeftAnimation}>Boris Grunwald</HeadingOne>
      <HeadingTwo underlined otherStyles={styles.subheading}>
        Software Developer
      </HeadingTwo>
    </header>
    </>
  )
}
