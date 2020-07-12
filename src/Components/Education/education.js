import React from "react"
import styles from "./education.module.scss"
import HeadingTwo from "../../Typography/HeadingTwo/headingTwo"
import kea from "../../kea.png"
import dtu from "../../dtu.png"

export default function Education() {
  return (
    <section id="educations" className={styles.education}>
      <HeadingTwo otherStyles={styles.heading}>My Education</HeadingTwo>
      <div className={styles.timeline}></div>
      <div className={styles.column}> 
        <TimelineEvent>
          <HeadingTwo underlined>2016-2018</HeadingTwo>
          <img src={kea} />
          <p>I studied at KEA (Københavns Erhvervsakademi) from 2016 to 2018</p>
        </TimelineEvent>
        <TimelineEvent>
          <HeadingTwo underlined>2012-2015</HeadingTwo>
          <p>High School at Gentofte Studenterkursus</p>
        </TimelineEvent>
      </div>
      <div className={`${styles.column} ${styles.columnRight}`}>
        <TimelineEvent right gridRow={2}>
          <HeadingTwo underlined>2018 - Until Now</HeadingTwo>
          <img src={dtu} />
          <p>
            Up until now I've been studying at DTU (Technical University of
            Denmark)
          </p>
        </TimelineEvent>
        <TimelineEvent right gridRow={2}>
          <HeadingTwo underlined>2015-2016</HeadingTwo>
          <p>
            Supplementary courses like Math
          </p>
        </TimelineEvent>
      </div>
    </section>
  )
}

function TimelineEvent({ children, right, mtop, gridRow }) {

  const theStyles = [styles.event]
  right && theStyles.push(styles.eventRight)

  return (
    <div className={theStyles.join(" ")}>
      {children}
    </div>
  )
}
