import React from "react"
import styles from "./competences.module.scss"
import HeadingTwo from "../../Typography/HeadingTwo/headingTwo"
import Card from "../Card/Card"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function Competences() {
  const data = useStaticQuery(graphql`
    query images {
      image: file(relativePath: { eq: "react.png" }) {
        childImageSharp {
          fixed(width: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <section id="competences" className={styles.competences}>
      <HeadingTwo underlined black>
        Competences
      </HeadingTwo>
      <div className={styles.cards}>
        <Card
          title="React"
          text="some text"
          img={data.image.childImageSharp.fixed}
        />
        <Card
          title="React"
          text="some text"
          img={data.image.childImageSharp.fixed}
        />
      </div>
    </section>
  )
}
