import React, { useState } from "react"

import Img from "gatsby-image"
import HeadingThree from "../../Typography/HeadingThree/HeadingThree"
import styled, { css } from "styled-components"
import { shadows } from "../../variables"

const cardSide = css`
  border-radius: 25px;
  height: 100%;
  width: 100%;
  backface-visibility: hidden;
  transition: transform var(--transition-speed) ease-in-out, box-shadow .4s;
  padding: var(--card-padding);
  cursor: pointer;

  
  box-shadow: ${shadows.shadowLight};

  &:hover {
    box-shadow: ${shadows.shadowDark};
  }
`

const CardFrontSide = styled.div`
  ${cardSide}
  display: grid;
  grid-gap: 2rem;
  justify-items: center;
  align-items: center;
  color: var(--front-side-color);
  background: var(--front-side-bgColor);
  position: relative;
  transform: ${({ clicked }) => (clicked ? "rotateX(180deg);" : "rotateX(0);")}
  z-index: 2;
`

const CardBackSide = styled.div`
  ${cardSide}
  color: var(--back-side-color);
  position: absolute;
  top: 0;
  left: 0;
  display:grid;
  grid-template-rows: min-content 1rem;
  grid-gap:3rem;
  background: var(--back-side-bgColor);
  transform: ${({ clicked }) => (clicked ? "rotateX(0);" : "rotateX(-180deg);")}
  z-index: 1;
`

const StyledCard = styled.div`
  --gradient-angle: 180deg;
  --transition-speed: 0.6s;
  --front-side-bgColor: #fff;
  --back-side-bgColor: var(--color-primary);
  --front-side-color: white;
  --back-side-color: white;
  --card-padding: 4rem;

  font-size: 1.6rem;
  position: relative;
  perspective: 650px;

  transition: transform 0.4s;
  &:hover {
    transform: scale(1.05) translateY(-10px);
  }
`

const BacksideParagraph = styled.h3`
  font-size: 1.6rem;
`

const SkillLevel = styled.div`
  background: linear-gradient(
    90deg,
    rgb(89, 211, 139) 0%,
    rgb(77, 239, 121) 50%
  );
  border-radius: 5px;
  width: ${({skillLevel}) => `${skillLevel}%;`}
  transition: transform 0.7s;
  transform-origin: left;
  ${({ active }) =>
    active
      ? css`
          transition-delay:.4s;
          transform: scaleX(1);
        `
      : "transform:scaleX(0);"}
`

export default function Card({ img, title, text, skillLvl }) {
  const [clicked, setClicked] = useState(false)

  return (
    <StyledCard onClick={() => setClicked(prev => !prev)}>
      <CardFrontSide clicked={clicked}>
        <HeadingThree black>{title}</HeadingThree>
        <Img fixed={img} />
      </CardFrontSide>
      <CardBackSide clicked={clicked}>
        <BacksideParagraph>Skill level:</BacksideParagraph>
        <SkillLevel skillLevel={skillLvl} active={clicked} />
      </CardBackSide>
    </StyledCard>
  )
}
