import React from "react"
import Header from "../components/header"
import "./css/layout.css"

const Layout = ({ children }) => {
  return (
    <div className="body-wrapper">
      <div className="body-content">
        <Header />
        <main>{children}</main>
      </div>
      {/* <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer> */}
    </div>
  )
}

export default Layout
