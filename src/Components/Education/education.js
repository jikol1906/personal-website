import React from "react"
import styles from "./education.module.scss"
import HeadingTwo from "../../Typography/HeadingTwo/headingTwo"
import kea from "../../kea.png"
import dtu from "../../dtu.png"

export default function Education() {
  console.log(styles)
  return (
    <section className={styles.education}>
      <HeadingTwo otherStyles={styles.heading}>My Education</HeadingTwo>
      <div className={styles.timeline}></div>
      <TimelineEvent mtop={"6rem"} gridRow={2}>
        <HeadingTwo underlined>2016-2018</HeadingTwo>
        <img src={kea} />
        <p>I studied at KEA (Københavns Erhvervsakademi) from 2016 to 2018</p>
      </TimelineEvent>
      <TimelineEvent right gridRow={2}>
        <HeadingTwo underlined>2018 - Until Now</HeadingTwo>
        <img src={dtu} />
        <p>I studied at KEA (Københavns Erhvervsakademi) from 2018 to 2020</p>
      </TimelineEvent>
      <TimelineEvent gridRow={3}>
        <HeadingTwo>Some text</HeadingTwo>
      </TimelineEvent>
      <TimelineEvent right mtop={"3rem"} gridRow={3}>
        <HeadingTwo>Some text</HeadingTwo>
      </TimelineEvent>
    </section>
  )
}

function TimelineEvent({ children, right, mtop, gridRow }) {
  const inlineStyles = {
    gridRow,
    marginTop: mtop,
  }

  const theStyles = [styles.event]
  right && theStyles.push(styles.eventRight)

  return (
    <div className={theStyles.join(" ")} style={inlineStyles}>
      {children}
    </div>
  )
}
