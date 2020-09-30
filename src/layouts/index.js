import React from "react"
import Header from "../components/header"
import "./layout.css"
import Transition from "../components/transition"

const Layout = ({ children, location }) => {
  return (
    <div className="body-wrapper">
      <div className="body-content">
        <Header />
        <main>
          <Transition location={location}>{children}</Transition>
        </main>
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
