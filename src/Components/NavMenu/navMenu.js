import React from "react"
import { Link } from "gatsby"
import styles from "./navMenu.module.scss"
import scrollTo from "gatsby-plugin-smoothscroll"

export default function NavMenu() {
  const closeNavBar = () => {
    const checkbox = document.getElementById("navi-toggle")
    checkbox.checked = false
  }

  return (
    <div className={styles.navigation}>
      <NavToggleButton />
      <nav onClick={closeNavBar} className={styles.nav}>
        <ul className={styles.list}>
          <NavItem to="home">Home</NavItem>
          <NavItem to="about">About</NavItem>
          <NavItem to="educations">Education Timeline</NavItem>
          <NavItem to="competences">Competences</NavItem>
          <NavItem to="personal-projects">Personal Projects</NavItem>
        </ul>
      </nav>
    </div>
  )
}

function NavItem({ children, to }) {
  return (
    <li className={styles.item}>
      <button className={styles.link} onClick={() => scrollTo(`#${to}`)}>
        {children}
        
      </button>
    </li>
  )
}

function NavToggleButton() {
  return (
    <React.Fragment>
      <input type="checkbox" className={styles.checkbox} id="navi-toggle" />
      <label htmlFor="navi-toggle" className={styles.button}>
        <span className={styles.icon}>&nbsp;</span>
      </label>
    </React.Fragment>
  )
}
