import React from "react"
import { Link } from 'gatsby'
import styles from './navMenu.module.scss'

export default function NavMenu() {

  return (
    <div className={styles.navigation}>
      <NavToggleButton />
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <NavItem to="/">Home</NavItem>
          <NavItem to="/side-projects">Personal Projects</NavItem>
          <NavItem to="#">Something else</NavItem>
        </ul>
      </nav>
    </div>
  )
}

function NavItem({ children, to }) {
  return (
    <li className={styles.item}>
      <Link to={to} className={styles.link}>
        {children}
      </Link>
    </li>
  )
}

function NavToggleButton() {
  return (
    <React.Fragment>
      <input type="checkbox" className={styles.checkbox} id="navi-toggle" />
      <label for="navi-toggle" className={styles.button}>
        <span className={styles.icon}>&nbsp;</span>
      </label>
    </React.Fragment>
  )
}
