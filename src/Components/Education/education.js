import React, { useEffect, useState, useRef } from "react"
import styles from "./education.module.scss"
import HeadingTwo from "../../Typography/HeadingTwo/headingTwo"
import useMeasure from "../../Utils/useMeasure"
import {
  fadeInTopExited,
  fadeInEntered,
  fadeInEnteredLargeDelay,
  fadeInRightCornerExited,
  fadeInLeftCornerExited,
} from "../../Utils/Transitions/transitions"
import useMediaQuery from "../../Utils/useMediaQuery"
import timeEv from "../../../static/TimelineEvents.json"
import { removeUneven, removeEven } from '../../Utils/Helperfunctions'

export default function Education() {
  const timeLineRef = useRef()
  const timeLineIsInView = useMeasure(timeLineRef, 400)
  const matches = useMediaQuery("(max-width: 50em)")

  const timeLineEvents = (
    <>
      <div
        style={!timeLineIsInView ? fadeInLeftCornerExited : fadeInEntered}
        className={styles.column}
      >
        {!matches
          ? timeEv
              .filter(removeUneven)
              .map(ev => (
                <TimelineEvent key={ev.title} title={ev.title} text={ev.text} />
              ))
          : timeEv.map(ev => (
              <TimelineEvent key={ev.title} title={ev.title} text={ev.text} />
            ))}
      </div>
      {!matches && (
        <div
          className={`${styles.column} ${styles.columnRight}`}
          style={!timeLineIsInView ? fadeInRightCornerExited : fadeInEntered}
        >
          {timeEv
            .filter(removeEven)
            .map(ev => (
              <TimelineEvent
                right
                key={ev.title}
                title={ev.title}
                text={ev.text}
              />
            ))}
        </div>
      )}
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
