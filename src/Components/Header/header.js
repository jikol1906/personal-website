import React from "react"
import styles from "./header.module.scss"
import HeadingOne from "../../Typography/HeadingOne/headingOne"
import HeadingTwo from "../../Typography/HeadingTwo/headingTwo"
import {moveInLeftAnimation} from '../../animations'
import Background from '../Background/Background'

export default function Header() {
  return (
    <>
    <Background gridRow={'1/3'} type={'header'}/>
    <header id="home" className={styles.header}>
      
      <HeadingOne animation={moveInLeftAnimation}>Boris Grunwald</HeadingOne>
      <HeadingTwo otherStyles={styles.subheading}>
        Software Developer
      </HeadingTwo>
    </header>
    </>
  )
}
