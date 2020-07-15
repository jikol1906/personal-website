import React, { useEffect, useState } from "react"
import styles from "./education.module.scss"
import HeadingTwo from "../../Typography/HeadingTwo/headingTwo"

export default function Education() {
  const [smallerScreen, setSmallerScreen] = useState(false)

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

  return (
    <section id="educations" className={styles.education}>
      <HeadingTwo otherStyles={styles.heading}>My Education</HeadingTwo>
      <div className={styles.timeline}></div>

      {smallerScreen ? (
        <div className={styles.column}>
          <TimelineEvent>
            <HeadingTwo underlined>Since 2018</HeadingTwo>
            {/* <img src={dtu} /> */}
            <p>
              Up until now I've been studying at DTU (Technical University of
              Denmark)
            </p>
          </TimelineEvent>
          <TimelineEvent>
            <HeadingTwo underlined>2016 - 2018</HeadingTwo>
            <p>
              I studied at KEA (Københavns Erhvervsakademi) from 2016 to 2018
            </p>
          </TimelineEvent>
          <TimelineEvent>
            <HeadingTwo underlined>2012 - 2015</HeadingTwo>
            <p>High School at Gentofte Studenterkursus</p>
          </TimelineEvent>
        </div>
      ) : (
        <React.Fragment>
          <div className={styles.column}>
            <TimelineEvent>
              <HeadingTwo underlined>2016 - 2018</HeadingTwo>
              <p>
                I studied at KEA (Københavns Erhvervsakademi) from 2016 to 2018
              </p>
            </TimelineEvent>
            <TimelineEvent>
              <HeadingTwo underlined>2012 - 2015</HeadingTwo>
              <p>High School at Gentofte Studenterkursus</p>
            </TimelineEvent>
          </div>
          <div className={`${styles.column} ${styles.columnRight}`}>
            <TimelineEvent right>
              <HeadingTwo underlined>Since 2018</HeadingTwo>
              <p>
                Up until now I've been studying at DTU (Technical University of
                Denmark)
              </p>
            </TimelineEvent>
            <TimelineEvent right>
              <HeadingTwo underlined>2015 - 2016</HeadingTwo>
              <p>Supplementary courses like Math</p>
            </TimelineEvent>
          </div>
        </React.Fragment>
      )}
    </section>
  )
}

function TimelineEvent({ children, right, mtop, gridRow }) {
  const theStyles = [styles.event]
  right && theStyles.push(styles.eventRight)

  return <div className={theStyles.join(" ")}>{children}</div>
}
