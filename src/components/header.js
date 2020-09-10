import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import "./css/header.css"

const Header = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const title = data.site.siteMetadata.title

  const toggleMenu = () => {
    const navLinks = document.querySelector(".nav-links")
    navLinks.classList.toggle("toggle-menu")
  }

  return (
    <nav className="main-nav">
      <div className="wrapper">
        <Link to="/" className="brand-logo logo">
          {title}
        </Link>
        <ul className="nav-links right">
          <li className="nav-link">
            <Link to="/" activeClassName="active">
              home
            </Link>
          </li>
          <li className="nav-link">
            <Link to="/about" activeClassName="active">
              about
            </Link>
          </li>
          <li className="nav-link">
            <Link to="/projects" activeClassName="active">
              projects
            </Link>
          </li>
          <li className="nav-link">
            <Link to="/blog" activeClassName="active">
              blog
            </Link>
          </li>
          <li className="nav-link">
            <Link to="/contact" activeClassName="active">
              contact
            </Link>
          </li>
        </ul>
        <ul className="right hide-on-large-only" onClick={toggleMenu}>
          <li>
            <Link to="#">
              <FontAwesomeIcon icon={faBars} className="burger" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
export default Header
