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
  transition: transform var(--transition-speed) ease-in-out, box-shadow 0.4s;
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
  transform: ${({ clicked }) => (clicked ? "rotateY(180deg);" : "rotateY(0);")}
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
  transform: ${({ clicked }) => (clicked ? "rotateY(0);" : "rotateY(-180deg);")}
  z-index: 1;
`

const StyledCard = styled.div`
  --gradient-angle: 180deg;
  --transition-speed: 0.4s;
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
  --border-radius: 5px;

  background: rgba(0, 0, 0, 0.2);
  border-radius: var(--border-radius);

  &::after {
    content: "";
    background: linear-gradient(
      90deg,
      rgb(89, 211, 139) 0%,
      rgb(77, 239, 121) 50%
    );
    border-radius: var(--border-radius);
    display: block;
    height: 100%;
    transition: transform 0.7s ease-out;
    transform-origin: left;
    width: ${({ skillLevel }) => `${skillLevel}%;`}
      ${({ active }) =>
        active
          ? css`
              transition-delay: calc(var(--transition-speed) - 0.2s);
              transform: scaleX(1);
            `
          : css`
              transition-delay: var(--transition-speed);
              transition-duration: 0;
              transform: scaleX(0);
            `};
  }
`

export default function Card({ img, title, text, skillLvl }) {
  const [clicked, setClicked] = useState(false)

  return (
    <StyledCard onClick={() => setClicked(prev => !prev)}>
      <CardFrontSide clicked={clicked}>
        <HeadingThree black>{title}</HeadingThree>
        <Img fixed={img} alt={title} />
      </CardFrontSide>
      <CardBackSide clicked={clicked}>
        <BacksideParagraph>Skill level:</BacksideParagraph>
        <SkillLevel skillLevel={skillLvl} active={clicked} />
      </CardBackSide>
    </StyledCard>
  )
}
