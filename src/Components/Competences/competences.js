import React from "react"
import styles from "./competences.module.scss"
import HeadingTwo from "../../Typography/HeadingTwo/headingTwo"
import Card from "../Card/Card"
import { useStaticQuery, graphql } from "gatsby"
import CompetencesJSON from "../../../static/Competences/Competences.json"

export default function Competences() {
  const data = useStaticQuery(graphql`
    query competences {
      allImage: allFile(filter: { relativeDirectory: { eq: "Competences" } }) {
        nodes {
          id
          base
          childImageSharp {
            fixed(height: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  `)

  Object.keys(CompetencesJSON).forEach(k => {
    CompetencesJSON[k] = CompetencesJSON[k].map(c => {
      const { id, childImageSharp } = data.allImage.nodes.find(
        node => c.img === node.base
      )

      return (
        <Card
          key={id}
          text={c.text}
          title={c.title}
          img={childImageSharp.fixed}
        />
      )
    })
  })

  return (
    <section id="competences" className={styles.competences}>
      <HeadingTwo underlined black>
        Competences
      </HeadingTwo>
      <HeadingTwo black>Technologies / Programming Langauges</HeadingTwo>
      <div className={styles.cards}>{CompetencesJSON.languages}</div>
      <HeadingTwo black>Frameworks / Libraries</HeadingTwo>
      <div className={styles.cards}>{CompetencesJSON.frameworks}</div>
      <HeadingTwo black>Version Control</HeadingTwo>
      <div className={styles.cards}>{CompetencesJSON.versionControl}</div>
    </section>
  )
}
