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
                <TimelineEvent
                  key={ev.title}
                  title={ev.title}
                  text={ev.text}
                  img={ev.img}
                />
              ))
          : timeEv.map(ev => (
              <TimelineEvent
                key={ev.title}
                title={ev.title}
                text={ev.text}
                img={ev.img}
              />
            ))}
      </div>
      {!matches && (
        <div
          className={`${styles.column} ${styles.columnRight}`}
          style={!timeLineIsInView ? fadeInRightCornerExited : fadeInEntered}
        >
          {timeEv.filter(removeEven).map(ev => (
            <TimelineEvent
              right
              key={ev.title}
              title={ev.title}
              text={ev.text}
              img={ev.img}
            />
          ))}
        </div>
      )}
    </>
  )
  return (
    <>
    <div className={styles.background}></div>
    <section id="educations" className={styles.education}>
      <HeadingTwo otherStyles={styles.heading}>My Education</HeadingTwo>
      <div
        style={
          !timeLineIsInView ? expandFromTopExited : expandFromTopEnteredDelay
        }
        ref={timeLineRef}
        className={styles.timeline}
      ></div>
      {timeLineEvents}
    </section>
    </>
  )
}

function TimelineEvent({ children, right, text, title, img }) {
  const data = useStaticQuery(graphql`
    query education {
      allImage: allFile(filter: { relativeDirectory: { eq: "Education" } }) {
        nodes {
          base
          childImageSharp {
            fluid{
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  const theStyles = [styles.event]
  right && theStyles.push(styles.eventRight)

  if (img) {
    const theImg = (
      <Img
        className={styles.img}
        fluid={
          data.allImage.nodes.find(i => i.base === img).childImageSharp.fluid
        }
      />
    )

    return (
      <div className={theStyles.join(" ")}>
        <HeadingTwo underlined>{title}</HeadingTwo>
        <p>{text}</p>
        {theImg}
      </div>
    )
  } else {
    return (
      <div className={theStyles.join(" ")}>
        <HeadingTwo underlined>{title}</HeadingTwo>
        <p>{text}</p>
      </div>
    )
  }
}
