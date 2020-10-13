import styled, { css } from "styled-components"
import { mq, margins, fontSizes } from "../../variables"
import { fadeInEntered, fadeInLeftCornerExited } from "../../transitions"
import { StyledHeadingTwo } from "../../Typography/HeadingTwo/headingTwo"
import { isEvenNum } from "../../Utils/Helperfunctions"
import { box, absoluteCenterVertical } from "../../mixins"

export const EducationSection = styled.section`
  --timeline-width: 0.3rem;
  --timeline-dot-size: 6rem;
  --timeline-curve: 100rem;
  --timeline-color: rgba(255, 255, 255, 0.7);

  --event-dot-size: 4rem;
  --event-column-span: 3;
  --event-padding: 8rem;

  --row-height: 20rem;
  --row-gap: 6rem;

  ${mq.small} {
    --timeline-dot-size: 3rem;
    --event-dot-size: 2rem;
    --row-height: 25rem;
    --row-gap: 3rem;
  }

  padding: var(--section-padding-top-bottom) var(--section-padding-left-right);
  grid-column: center-start / center-end;
  grid-row: 5/6;
  z-index: 2;

  display: grid;
  grid-template-columns:
    [left-side-start]
    repeat(3, 1fr)
    [left-side-end right-side-start]
    repeat(3, 1fr)
    [right-side-end];

  grid-template-rows:
    min-content
    var(--row-height)
    var(--timeline-width);

  grid-auto-rows: var(--row-height) var(--row-height) var(--row-height)
    var(--timeline-width);

  grid-row-gap: var(--row-gap);
`

export const EducationSectionHeader = styled(StyledHeadingTwo)`
  grid-column: 1/-1;
  grid-row: 1/2;
  margin-bottom: 10rem;
`

export const EducationSectionTimelineStart = styled.div``

export const EducationTimelineEvent = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  grid-column: 1/6;
  position: relative;
  background: var(--color-secondary);
  height: 60rem;
  width: 100%;
  text-align: center;
  align-self: center;
  justify-self:center;
  border-radius: 50%;
  padding: var(--event-padding);

  p {
    font-size: ${fontSizes.default}
    margin-bottom: ${margins.big}
  }

  h2 {
    margin-bottom: 4rem;
  }

  ${mq.smallest} {
    width: 110%;
  }

  &::after {
    ${box("var(--event-dot-size)")}
    ${absoluteCenterVertical}
    content: "";
    display: block;
    background: var(--color-secondary);
    border-radius: 50%;
    right: calc(
      -1 * (var(--event-dot-size) / 2 + 20% - var(--timeline-width) / 2)
    );

    ${mq.smallest} {
      right: calc(
        -1 * (var(--event-dot-size) / 2 + 9.09% - var(--timeline-width) / 2)
      );
    }
  }

  ${({ show }) => (show ? fadeInEntered : fadeInLeftCornerExited)}
  ${({ right }) =>
    right &&
    css`
      grid-column: 2/ 7;
      &::after {
        left: calc(
          -1 * (var(--event-dot-size) / 2 + 20% - var(--timeline-width) / 2)
        );

        ${mq.smallest} {
          left: calc(
            -1 * (var(--event-dot-size) / 2 + 9.09% - var(--timeline-width) / 2)
          );
        }
      }

      ${mq.smallest} {
        justify-self: flex-end;
      }
    `}
`

export const EducationSectionTimeline = styled.div`
  border-top: var(--timeline-width) solid var(--timeline-color);
  border-bottom: var(--timeline-width) solid var(--timeline-color);
  ${({ index }) =>
    isEvenNum(index)
      ? css`
          border-right: var(--timeline-width) solid var(--timeline-color);
          border-top-right-radius: var(--timeline-curve);
          border-bottom-right-radius: var(--timeline-curve);
          grid-column: right-side-start/right-side-end;
        `
      : css`
          border-left: var(--timeline-width) solid var(--timeline-color);
          border-top-left-radius: var(--timeline-curve);
          border-bottom-left-radius: var(--timeline-curve);
          grid-column: left-side-start/left-side-end;
        `}
`
