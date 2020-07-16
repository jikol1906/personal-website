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
        underlined
        black
      >
        About Me
      </HeadingTwo>
      <p
        ref={pRef}
        className={styles.text}
        style={!isInViewport ? fadeInLeftExited : fadeInEntered}
      >
        Jeg studerer Softwareteknologi (Diplomingeniør) på DTU. Programmering er
        en af mine store passioner, og har, lige siden jeg startede, altid
        interesseret mig. Når jeg står over for en løsning, der skal
        implementeres, så ser jeg en spændende, intellektuel udfordring, og ikke
        bare en ny kedelig arbejdsopgave, der skal overstås. I study Software
        Technology at DTU
      </p>
      <ul
        className={styles.detailsList}
        style={!isInViewport ? fadeInRightExited : fadeInEnteredDelay}
      >
        <li><strong>Age:</strong> {calculateAge()}</li>
        <li><strong>Email:</strong> borisgrunwald@gmail.com</li>
        <li><strong>Languages:</strong> English/Danish</li>
      </ul>
    </section>
  )
}
