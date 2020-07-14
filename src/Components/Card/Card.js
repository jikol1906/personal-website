import React from "react"
import styles from "./Card.module.scss"
import HeadingTwo from "../../Typography/HeadingTwo/headingTwo"
import Img from "gatsby-image"

export default function Card({ img, title, text }) {
  return (
    <div className={styles.card}>
      <HeadingTwo black>{title}</HeadingTwo>
      <Img fixed={img} />
      <p>{text}</p>
    </div>
  )
}
