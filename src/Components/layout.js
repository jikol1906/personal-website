import React from "react"
import styles from "./layout.module.scss"
import NavMenu from "./NavMenu/navMenu"
import GlobalStyle from "../globalStyles"
import { ThemeProvider } from "styled-components"

const theme = {
  shadowDark: "0 1.2rem 1.4rem rgba(0, 0, 0, 0.2);",
  shadowLight: "0 .7rem 2rem rgba(0, 0, 0, 0.1);",
}

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <NavMenu />
        {children}
      </ThemeProvider>
    </div>
  )
}
