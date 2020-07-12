    import React from "react"
    import "./layout.scss"
    import NavMenu from "./NavMenu/navMenu"

    export default function Layout({ children }) {
      return (
        <div className="container">
          <NavMenu />
          {children}
        </div>
      )
    }
