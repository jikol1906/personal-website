import React from "react"
import styles from "./competences.module.scss"
import HeadingTwo from "../../Typography/HeadingTwo/headingTwo"
import Card from "../Card/Card"
import { useStaticQuery, graphql } from "gatsby"
import CompetencesJSON from "../../../static/Competences/Competences.json"
import HeadingThree from '../../Typography/HeadingThree/HeadingThree'

export default function Competences() {
  const data = useStaticQuery(graphql`
    query competences {
      allCompetenceImages: allFile(filter: { relativeDirectory: { eq: "Competences" } }) {
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

  Object.keys(CompetencesJSON).forEach((k,i) => {
    CompetencesJSON[k] = CompetencesJSON[k].map(c => {
      const { id, childImageSharp } = data.allCompetenceImages.nodes.find(
        node => c.img === node.base
      )


      return (
        <Card
          key={id}
          text={c.text}
          title={c.title}
          img={childImageSharp.fixed}
          skillLvl={Math.random()*100}
        />

      )
    })
  })

  return (
    <section id="competences" className={styles.competences}>
      <HeadingTwo black>
        Competences
      </HeadingTwo>
      <HeadingThree black>Technologies / Programming Langauges</HeadingThree>
      <div className={styles.cards}>{CompetencesJSON.languages}</div>
      <HeadingThree black>Frameworks / Libraries</HeadingThree>
      <div className={styles.cards}>{CompetencesJSON.frameworks}</div>
      <HeadingThree black>Version Control</HeadingThree>
      <div className={styles.cards}>{CompetencesJSON.versionControl}</div>
    </section>
  )
}
