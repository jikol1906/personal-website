import React, { useLayoutEffect, useState, useRef } from "react"
import styles from "./aboutMe.module.scss"
import HeadingTwo from "../../Typography/HeadingTwo/headingTwo"
import useMeasure from "../../Utils/useMeasure"
import {
  fadeInLeftExited,
  fadeInRightExited,
  fadeInTopExited,
  fadeInEntered,
  fadeInEnteredDelay,
  fadeInEnteredLargeDelay,
} from "../../Utils/Transitions/transitions"

export default function AboutMe() {
  const pRef = useRef()
  const isInViewport = useMeasure(pRef)

  const calculateAge = () => {
    var diff_ms = Date.now() - new Date(1993, 12, 4).getTime()
    var age_dt = new Date(diff_ms)
    return Math.abs(age_dt.getUTCFullYear() - 1970)
  }

  return (
    <section id="about" className={styles.about}>
      <HeadingTwo
        inlineStyles={!isInViewport ? fadeInTopExited : fadeInEnteredLargeDelay}
        black
      >
        About Me
      </HeadingTwo>
      <p
        ref={pRef}
        className={styles.text}
        style={!isInViewport ? fadeInLeftExited : fadeInEntered}
      >
        I study a Masters in Computer Science and Engineering at DTU.
        Programming is one of my big passions and have, ever since I started,
        always interested me. When I stand before a solution, that has to be
        implemented, I see an exciting intellectual challenge and not just a
        boring task I have to get through.
      </p>
      <ul
        className={styles.detailsList}
        style={!isInViewport ? fadeInRightExited : fadeInEnteredDelay}
      >
        <li>
          <strong>Age:</strong> {calculateAge()}
        </li>
        <li>
          <strong>Email:</strong> borisgrunwald@gmail.com
        </li>
        <li>
          <strong>Languages:</strong> English/Danish/ (a little) German
        </li>
      </ul>
    </section>
  )
}
