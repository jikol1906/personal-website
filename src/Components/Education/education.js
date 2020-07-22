import React, { useEffect, useState, useRef } from "react"
import styles from "./education.module.scss"
import HeadingTwo from "../../Typography/HeadingTwo/headingTwo"
import useMeasure from "../../Utils/useMeasure"
import {
  fadeInEntered,
  fadeInRightCornerExited,
  fadeInLeftCornerExited,
  expandFromTopExited,
  expandFromTopEnteredDelay,
} from "../../Utils/Transitions/transitions"
import { useStaticQuery, graphql } from "gatsby"
import useMediaQuery from "../../Utils/useMediaQuery"
import timeEv from "../../../static/TimelineEvents.json"
import Img from "gatsby-image"
import { removeUneven, removeEven } from "../../Utils/Helperfunctions"

const timeLineEvents = [
  {
    title: "DTU",
    text: "I have studied Software Engineering at DTU since 2018",
    img: "dtu.png",
  },
  {
    title: "KEA",
    text: "I studied Computer Science at KEA from 2016 - 2018",
    img: "kea.png",
  },
  {
    title: "KVUC",
    text: "Supplementary courses (Math)",
    img: "kvuc.png",
  },
  {
    title: "High School",
    text: "At Gentofte Studenterkursus",
  },
  {
    title: "Elementary School",
    text: "",
  },
]

export default function Education() {
  // const timeLineRef = useRef()
  // const timeLineIsInView = useMeasure(timeLineRef, 400)
  // const matches = useMediaQuery("(max-width: 50em)")

  const timeLine = []

  for (let i = 0; i < timeLineEvents.length; i++) {
    timeLine.push(
      <div
        key={i}
        style={{ gridRow: `${3 + 4 * i} / ${8 + 4 * i}` }}
        className={i % 2 === 0 ? styles.timeline__right : styles.timeline__left}
      ></div>
    )
  }

  return (
    <>
      <div className={styles.background}></div>
      <section id="educations" className={styles.education}>
        <HeadingTwo
          underlined
          otherStyles={styles.title}
          inlineStyles={{ gridColumn: "1/-1", gridRow: "1/2" }}
        >
          Education Timeline
        </HeadingTwo>
        <div className={`${styles.timeline__start}`}></div>
        {timeLine}
        {timeLineEvents.map((e, i) => (
          <TimelineEvent title={e.title} text={e.text} key={i} index={i} />
        ))}
        <div
          style={{
            gridRow: `${3 + 4 * timeLineEvents.length}/${
              5 + 4 * timeLineEvents.length
            }`,
          }}
          className={`${styles.timeline__end} ${
            timeLineEvents.length % 2 === 0 && styles.timeline__endRight
          }`}
        ></div>
      </section>
    </>
  )
}

function TimelineEvent({ index, text, title, img }) {
  const data = useStaticQuery(graphql`
    query education {
      allImage: allFile(filter: { relativeDirectory: { eq: "Education" } }) {
        nodes {
          base
          childImageSharp {
            fixed(height: 70) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  `)

  console.log(data)

  return (
    <div
      style={{ gridRow: `${4 + 4 * index} / ${7 + 4 * index}` }}
      className={
        index % 2 === 0 ? styles.event : `${styles.event} ${styles.eventRight}`
      }
    >
      <HeadingTwo underlined black>
        {title}
      </HeadingTwo>
      <p>{text}</p>
    </div>
  )
}
