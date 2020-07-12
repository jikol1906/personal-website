import React from "react"
import styles from "./competences.module.scss"
import HeadingTwo from "../../Typography/HeadingTwo/headingTwo"
import Card from "../Card/Card"
import react from "../../react.png"
import js from "../../js.png"

export default function Competences() {
  const cards = [
    {
      title: "React",
      text: "I have lots ",
      img: react,
    },
  ]

  return (
    <section id="competences" className={styles.competences}>
      <HeadingTwo underlined black>
        Competences
      </HeadingTwo>
      <div className={styles.cards}>
        <Card img={react}></Card>
        <Card img={js}></Card>
      </div>
    </section>
  )
}
