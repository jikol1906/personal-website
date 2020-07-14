import React from "react"
import styles from "./Card.module.scss"
import Img from "gatsby-image"
import HeadingThree from '../../Typography/HeadingThree/HeadingThree'

export default function Card({ img, title, text }) {
  return (
    <div className={styles.card}>
      <HeadingThree black>{title}</HeadingThree>
      <Img fixed={img} />
    </div>
  )
}
