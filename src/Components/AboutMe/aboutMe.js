import React, { useLayoutEffect, useState, useRef } from "react"
import styles from "./aboutMe.module.scss"
import HeadingTwo from "../../Typography/HeadingTwo/headingTwo"
import useMeasure from "../../Utils/useMeasure"

export default function AboutMe() {
  const pRef = useRef()
  const isInViewport = useMeasure(pRef)

  const calculateAge = () => {
    var diff_ms = Date.now() - new Date(1993, 12, 4).getTime()
    var age_dt = new Date(diff_ms)
    return Math.abs(age_dt.getUTCFullYear() - 1970)
  }

  return (
    <section
      id="about"
      className={styles.about}
    >
      <HeadingTwo underlined black>
        About Me
      </HeadingTwo>
      <p ref={pRef} className={[styles.text,'fade-in-left-exited'].join(' ')}>
        Jeg studerer Softwareteknologi (Diplomingeniør) på DTU. Programmering er
        en af mine store passioner, og har, lige siden jeg startede, altid
        interesseret mig. Når jeg står over for en løsning, der skal
        implementeres, så ser jeg en spændende, intellektuel udfordring, og ikke
        bare en ny kedelig arbejdsopgave, der skal overstås. 
        I study Software Technology at DTU
      </p>
      <ul className={styles.detailsList}>
        <li>Age: {calculateAge()}</li>
        <li>Email: borisgrunwald@gmail.com</li>
      </ul>
    </section>
  )
}
