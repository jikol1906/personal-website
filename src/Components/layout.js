    import React from "react"
    import styles from "./layout.module.scss"
    import NavMenu from "./NavMenu/navMenu"

    export default function Layout({ children }) {
      return (
        <div className={styles.container}>
          <NavMenu />
          {children}
        </div>
      )
    }
