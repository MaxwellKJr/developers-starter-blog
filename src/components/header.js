import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import "./css/header.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faEnvelope,
  faHome,
  faLaptopCode,
  faPen,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons"
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons"

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

  return (
    <nav className="main-nav">
      <div className="wrapper">
        <Link to="/" className="logo" title="The Malawian🇲🇼 Developer">
          {title}
        </Link>
        <ul className="nav-links">
          <li className="nav-link">
            <Link to="/" activeClassName="active" title="Home">
              <FontAwesomeIcon icon={faHome} className="show-on-med" />
              <span>Home</span>
            </Link>
          </li>
          <li className="nav-link">
            <Link to="/about" activeClassName="active" title="Know me">
              <FontAwesomeIcon icon={faUserAlt} className="show-on-med" />
              <span>About</span>
            </Link>
          </li>
          <li className="nav-link">
            <Link to="/projects" activeClassName="active" title="See my work">
              <FontAwesomeIcon icon={faLaptopCode} className="show-on-med" />
              <span>Projects</span>
            </Link>
          </li>
          <li className="nav-link">
            <Link to="/blog" activeClassName="active" title="Read something">
              <FontAwesomeIcon icon={faPen} className="show-on-med" />
              <span>Blog</span>
            </Link>
          </li>
          <li className="nav-link">
            <Link to="/contact" activeClassName="active" title="Reach me">
              <FontAwesomeIcon icon={faEnvelope} className="show-on-med" />
              <span>Contact</span>
            </Link>
          </li>
        </ul>
        <ul className="social-links">
          <li>
            <Link
              to="https://web.facebook.com/maxwelljr.kapezi/"
              target="_blank"
              rel="noopener noreferrer"
              title="Facebook"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </Link>
          </li>
          <li>
            <Link
              to="https://twitter.com/maxwellkjr"
              target="_blank"
              rel="noopener noreferrer"
              title="Twitter"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
          </li>
          <li>
            <Link
              to="https://instagram.com/_maxwellkjr"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
          </li>
          <li>
            <Link
              to="https://github.com/MaxwellKJr"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} />
            </Link>
          </li>
          <li>
            <Link
              to="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact_info%3BZtlTnqqYSwWD90TH%2B2IOEQ%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>
          </li>
          <li>
            <Link
              to="https://wa.me/265992800255"
              target="_blank"
              rel="noopener noreferrer"
              title="WhatsApp"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
export default Header
