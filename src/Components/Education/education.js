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

export default function Education() {
  const [smallerScreen, setSmallerScreen] = useState(false)
  const timeLineRef = useRef()

  const timeLineIsInView = useMeasure(timeLineRef, 400)

  useEffect(() => {
    const list = window.matchMedia("(max-width: 56.25em)")
    const handler = list => {
      setSmallerScreen(list.matches)
    }
    handler(list)
    list.addListener(handler)
    return () => {
      list.removeListener(handler)
    }
  }, [])

  const timeLineEvents = smallerScreen ? (
    <div className={styles.column}>
      <TimelineEvent
        title="Since 2018"
        text="Up until now I've been studying at DTU (Technical University of Denmark"
      />
      <TimelineEvent
        title="2016 - 2018"
        text="I studied at KEA (Københavns Erhvervsakademi) from 2016 to 2018"
      />
    </div>
  ) : (
    <>
      <div className={styles.column}>
        <TimelineEvent
          title="Since 2018"
          text="Up until now I've been studying at DTU (Technical University of Denmark"
        />
        <TimelineEvent
          title="2016 - 2018"
          text="I studied at KEA (Københavns Erhvervsakademi) from 2016 to 2018"
        />
      </div>
      <div className={`${styles.column} ${styles.columnRight}`}>
        <TimelineEvent
          right
          title="Since 2018"
          text="Up until now I've been studying at DTU (Technical University of Denmark"
        />
        <TimelineEvent
          right
          title="2016 - 2018"
          text="I studied at KEA (Københavns Erhvervsakademi) from 2016 to 2018"
        />
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
