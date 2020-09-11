import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import "./css/header.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faHome,
  faEnvelope,
  faLaptopCode,
  faPen,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons"
import {
  faFacebook,
  faGithub,
  faInstagram,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"

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
        <Link to="/" className="logo">
          {title}
        </Link>
        <ul className="nav-links">
          <li className="nav-link">
            <Link to="/" activeClassName="active">
              <FontAwesomeIcon icon={faHome} className="show-on-med" />
              <span>home</span>
            </Link>
          </li>
          <li className="nav-link">
            <Link to="/about" activeClassName="active">
              <FontAwesomeIcon icon={faUserAlt} className="show-on-med" />
              <span>about</span>
            </Link>
          </li>
          <li className="nav-link">
            <Link to="/projects" activeClassName="active">
              <FontAwesomeIcon icon={faLaptopCode} className="show-on-med" />
              <span>projects</span>
            </Link>
          </li>
          <li className="nav-link">
            <Link to="/blog" activeClassName="active">
              <FontAwesomeIcon icon={faPen} className="show-on-med" />
              <span>blog</span>
            </Link>
          </li>
          <li className="nav-link">
            <Link to="/contact" activeClassName="active">
              <FontAwesomeIcon icon={faEnvelope} className="show-on-med" />
              <span>contact</span>
            </Link>
          </li>
        </ul>
        <ul className="social-links">
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </li>
        </ul>
        {/* <ul className="hide-on-large-only" onClick={toggleMenu}>
          <li>
            <Link to="#">
              <FontAwesomeIcon icon={faBars} className="burger" />
            </Link>
          </li>
        </ul> */}
      </div>
    </nav>
  )
}
export default Header
