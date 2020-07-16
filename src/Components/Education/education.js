import React, { useEffect, useState, useRef } from "react"
import styles from "./education.module.scss"
import HeadingTwo from "../../Typography/HeadingTwo/headingTwo"
import useMeasure from "../../Utils/useMeasure"
import {
  fadeInTopExited,
  fadeInEntered,
  fadeInEnteredDelay,
  fadeInEnteredLargeDelay,
  fadeInRightExited,
  fadeInRightCornerExited,
  fadeInLeftCornerExited,
} from "../../Utils/Transitions/transitions"
import useMediaQuery from "../../Utils/useMediaQuery"

const timeEv = [
  {
    title: "Since 2018",
    text:
      "Up until now I've been studying at DTU (Technical University of Denmark",
  },
  {
    title: "2016 - 2018",
    text: "I studied at KEA (Københavns Erhvervsakademi) from 2016 to 2018",
  },
  {
    title: "2015 - 2016",
    text: "Supplementary Courses (Math and Physics)",
  },
  {
    title: "2012 - 2015",
    text: "High School at Gentofte Studenterkursus",
  },
]

export default function Education() {
  const timeLineRef = useRef()
  const timeLineIsInView = useMeasure(timeLineRef, 400)
  const matches = useMediaQuery("(max-width: 50em)")

  const timeLineEvents = matches ? (
    <div className={styles.column}>
      {timeEv.map(ev => (
        <TimelineEvent key={ev.title} title={ev.title} text={ev.text} />
      ))}
    </div>
  ) : (
    <>
      <div
        className={styles.column}
        style={!timeLineIsInView ? fadeInLeftCornerExited : fadeInEntered}
      >
        {timeEv
          .filter((e, i) => i % 2 !== 0)
          .map(ev => (
            <TimelineEvent key={ev.title} title={ev.title} text={ev.text} />
          ))}
      </div>
      <div
        className={`${styles.column} ${styles.columnRight}`}
        style={!timeLineIsInView ? fadeInRightCornerExited : fadeInEntered}
      >
        {timeEv
          .filter((e, i) => i % 2 === 0)
          .map(ev => (
            <TimelineEvent right key={ev.title} title={ev.title} text={ev.text} />
          ))}
      </div>
    </>
  )

  return (
    <section id="educations" className={styles.education}>
      <HeadingTwo otherStyles={styles.heading}>My Education</HeadingTwo>
      <div
        style={!timeLineIsInView ? fadeInTopExited : fadeInEnteredLargeDelay}
        ref={timeLineRef}
        className={styles.timeline}
      ></div>
      {timeLineEvents}
    </section>
  )
}

function TimelineEvent({ children, right, text, title }) {
  const theStyles = [styles.event]
  right && theStyles.push(styles.eventRight)
  return (
    <div className={theStyles.join(" ")}>
      <HeadingTwo underlined>{title}</HeadingTwo>
      <p>{text}</p>
    </div>
  )
}
