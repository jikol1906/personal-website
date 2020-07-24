import React from "react"
import styled, { css } from "styled-components"
import { colors } from "../../variables"

const clipPaths = {
  header: css`
  polygon(
        0 0,
        100% 0,
        100% calc(100vh - var(--section-intersection-length)),
        0 100%
      );`,
  sectionLeft: css`
  polygon(
    0 var(--section-intersection-length),
    100% 0,
    100% 100%,
    0 calc(100% - var(--section-intersection-length))
  );`,
}

const StyledBackground = styled.div`
  grid-column: full-start / full-end;
  background-image: linear-gradient(
    to bottom right,
    var(--color-primary),
    var(--color-primary-2)
  );
  grid-row: ${({ gridRow }) => gridRow};
  clip-path: ${({ type }) => {
    switch (type) {
      case "header":
        return clipPaths[type]
      case "sectionLeft":
        return clipPaths[type]
    }
  }}
  z-index: 2;
`

export default function Background({ type, gridRow }) {
  return <StyledBackground gridRow={gridRow} type={type} />
}
