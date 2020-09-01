import React from "react"
import styles from "./PersonalProjects.module.scss"
import Background from "../Background/Background"
import styled from "styled-components"

const styledSection = styled.section`
  grid-column: 1/-1;
  grid-row: 9/10;
  padding: var(--section-padding-top-bottom) var(--section-padding-left-right);
  clip-path: polygon(
    0 var(--section-intersection-length),
    100% 0,
    100% 100%,
    0 100%
  );
  z-index: 3;
`

export default function PersonalProjects() {
  return (
    <>
      <Background type={"sectionLeft"} gridRow={"8/11"} />
      <styledSection>
          
      </styledSection>
    </>
  )
}
