import React from "react"
import styles from "./aboutMe.module.scss"
import HeadingTwo from "../../Typography/HeadingTwo/headingTwo"

export default function AboutMe() {
  return (
    <section className={styles.about}>
      <HeadingTwo underlined>About Me</HeadingTwo>
      <p className={styles.text}>
        Jeg studerer Softwareteknologi (Diplomingeniør) på DTU. Programmering er
        en af mine store passioner, og har, lige siden jeg startede, altid
        interesseret mig. Når jeg står over for en løsning, der skal
        implementeres, så ser jeg en spændende, intellektuel udfordring, og ikke
        bare en ny kedelig arbejdsopgave, der skal overstås.
      </p>
    </section>
  )
}
