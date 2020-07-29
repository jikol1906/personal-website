import React from "react"
import styles from "./layout.module.scss"
import NavMenu from "./NavMenu/navMenu"
import GlobalStyle from "../globalStyles"


export default function Layout({ children }) {
  return (
    <div className={styles.container}>
        <GlobalStyle />
        <NavMenu />
        {children}
    </div>
  )
}
