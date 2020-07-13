import React from "react"
import styles from "./Card.module.scss"
import HeadingTwo from "../../Typography/HeadingTwo/headingTwo"
import Img from "gatsby-image"

export default function Card({ img, title, text }) {
  return (
    <div className={styles.card}>
      <Img fixed={img}/>
      <HeadingTwo black>{title}</HeadingTwo>
      <p>{text}</p>
    </div>
  )
}
