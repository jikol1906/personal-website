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
  expandFromTopEntered,
  fadeInEnteredDelay,
} from "../../Utils/Transitions/transitions"
import { useStaticQuery, graphql } from "gatsby"
import useMediaQuery from "../../Utils/useMediaQuery"
import timeEv from "../../../static/TimelineEvents.json"
import Img from "gatsby-image"
import { removeUneven, removeEven } from "../../Utils/Helperfunctions"

const timeLineEvents = [
  {
    title: "DTU (Since 2018)",
    text: "I have studied Software Engineering at DTU",
    img: "dtu.png",
  },
  {
    title: "KEA (2016 - 2018)",
    text: "I studied Computer Science at KEA",
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
          <TimelineEvent
            title={e.title}
            text={e.text}
            key={i}
            index={i}
            img={e.img}
          />
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
  const eventRef = useRef()
  const isInViewport = useMeasure(eventRef)

  const data = useStaticQuery(graphql`
    query {
      allEducationImages: allFile(
        filter: { relativeDirectory: { eq: "Education" } }
      ) {
        nodes {
          childImageSharp {
            fixed(width:140) {
              ...GatsbyImageSharpFixed
            }
          }
          base
        }
      }
    }
  `)

  let theImg = null;

  if (img) {
    const imgSrc = data.allEducationImages.nodes.find(n => n.base === img)
    theImg = <Img fixed={imgSrc.childImageSharp.fixed}/>
  }

  let inlineStyles = {
    gridRow: `${4 + 4 * index} / ${7 + 4 * index}`,
  }

  if (!isInViewport) {
    if (index % 2 === 0) {
      inlineStyles = { ...inlineStyles, ...fadeInLeftCornerExited }
    } else {
      inlineStyles = { ...inlineStyles, ...fadeInRightCornerExited }
    }
  } else {
    inlineStyles = { ...inlineStyles, ...fadeInEntered }
  }

  return (
    <div
      ref={eventRef}
      style={inlineStyles}
      className={
        index % 2 === 0 ? styles.event : `${styles.event} ${styles.eventRight}`
      }
    >
      <HeadingTwo underlined black>
        {title}
      </HeadingTwo>
      <p>{text}</p>
      <a href="#">{theImg}</a>
    </div>
  )
}
