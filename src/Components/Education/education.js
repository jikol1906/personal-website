import React, { useEffect, useState, useRef } from "react"
import styles from "./education.module.scss"
import HeadingTwo from "../../Typography/HeadingTwo/headingTwo"
import useMeasure from "../../Utils/useMeasure"
import {
  fadeInEntered,
  fadeInRightCornerExited,
  fadeInLeftCornerExited,
} from "../../Utils/Transitions/transitions"
import { useStaticQuery, graphql } from "gatsby"
import useMediaQuery from "../../Utils/useMediaQuery"
import timeEv from "../../../static/TimelineEvents.json"
import Img from "gatsby-image"
import { removeUneven, removeEven } from "../../Utils/Helperfunctions"
import Background from "../Background/Background"
import {
  EducationSection,
  EducationSectionHeader,
  EducationSectionTimeline,
  EducationTimelineEvent,
} from "./EducationComponents"

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
  const timeLine = []

  for (let i = 0; i < timeLineEvents.length; i++) {
    timeLine.push(
      <EducationSectionTimeline
        key={i}
        index={i}
        style={{ gridRow: `${3 + 4 * i} / ${8 + 4 * i}` }}
      ></EducationSectionTimeline>
    )
  }

  return (
    <>
      <Background gridRow={"4/7"} type={"sectionLeft"} />
      <EducationSection>
        <EducationSectionHeader underlined>
          Education Timeline
        </EducationSectionHeader>
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
      </EducationSection>
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
            fixed(width: 140) {
              ...GatsbyImageSharpFixed
            }
          }
          base
        }
      }
    }
  `)

  let theImg = null

  if (img) {
    const imgSrc = data.allEducationImages.nodes.find(n => n.base === img)
    theImg = <Img fixed={imgSrc.childImageSharp.fixed} />
  }

  return (
    <EducationTimelineEvent
      ref={eventRef}
      show={isInViewport}
      style={{ gridRow: `${4 + 4 * index} / ${7 + 4 * index}`}}
      right={index % 2 !== 0}
    >
      <HeadingTwo underlined black>
        {title}
      </HeadingTwo>
      <p>{text}</p>
      <a href="#">{theImg}</a>
    </EducationTimelineEvent>
  )
}
