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
  // const timeLineRef = useRef()
  // const timeLineIsInView = useMeasure(timeLineRef, 400)
  // const matches = useMediaQuery("(max-width: 50em)")
  return (
    <>
    <div className={styles.background}></div>
    <section id="educations" className={styles.education}>
      <div className={`${styles.timeline} ${styles.timelineLeftBottom}`}></div>
      <div className={`${styles.timeline} ${styles.timelineTopRightBottom}`}></div>
      <div className={`${styles.timeline} ${styles.timelineTopLeftBottom}`}></div>
      <div className={`${styles.timeline} ${styles.timelineTopRightBottom}`}></div>
      <div className={styles.event} style={{gridRow:'3/6'}}><HeadingTwo black>DTU (Technical Univeristy Denmark)</HeadingTwo></div>
      <div className={`${styles.event}`} style={{gridRow:'7/10'}}><HeadingTwo black>KEA</HeadingTwo></div>
      <div className={`${styles.event}`} style={{gridRow:'11/14'}}><HeadingTwo black>High School</HeadingTwo></div>
    </section>
    </>
  )
}

// function TimelineEvent({ children, right, text, title, img }) {
//   const data = useStaticQuery(graphql`
//     query education {
//       allImage: allFile(filter: { relativeDirectory: { eq: "Education" } }) {
//         nodes {
//           base
//           childImageSharp {
//             fixed(height:70){
//               ...GatsbyImageSharpFixed
//             }
//           }
//         }
//       }
//     }
//   `)

//   const theStyles = [styles.event]
//   right && theStyles.push(styles.eventRight)

//   if (img) {
//     const theImg = (
//       <Img
//         className={styles.img}
//         fixed={
//           data.allImage.nodes.find(i => i.base === img).childImageSharp.fixed
//         }
//       />
//     )

//     return (
//       <div className={theStyles.join(" ")}>
//         <HeadingTwo underlined>{title}</HeadingTwo>
//         <p>{text}</p>
//         {theImg}
//       </div>
//     )
//   } else {
//     return (
//       <div className={theStyles.join(" ")}>
//         <HeadingTwo underlined>{title}</HeadingTwo>
//         <p>{text}</p>
//       </div>
//     )
//   }
// }
