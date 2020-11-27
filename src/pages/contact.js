import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../layouts/index"
import SEO from "../components/seo"
import "./css/contact.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons"

const Contact = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Contact" />
      <section id="contact" className="showcase-about">
        <div className="wrapper">
          <div className="contact">
            <div className="row">
              <div className="col s12 m8">
                <div className="contact-form">
                  <h4>Contact Me</h4>
                  <form method="POST" name="inquieries" netlify>
                    <input
                      type="text"
                      name="username"
                      placeholder="Your name (Optional)"
                    />
                    <input type="email" name="email" placeholder="Your Email" />
                    <input
                      type="text"
                      name="inquiery"
                      placeholder="Inquiries/Access our service(s)"
                    />
                    <button className="btn-primary" name="submit">
                      Submit <i className="fas fa-envelope icon"></i>
                    </button>
                  </form>
                  <ul className="social-links">
                    <li>
                      <a
                        to="https://web.facebook.com/maxwelljr.kapezi/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Facebook"
                      >
                        <FontAwesomeIcon icon={faFacebook} />
                      </a>
                    </li>
                    <li>
                      <a
                        to="https://twitter.com/maxwellkjr"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Twitter"
                      >
                        <FontAwesomeIcon icon={faTwitter} />
                      </a>
                    </li>
                    <li>
                      <a
                        to="https://instagram.com/_maxwellkjr"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Instagram"
                      >
                        <FontAwesomeIcon icon={faInstagram} />
                      </a>
                    </li>
                    <li>
                      <a
                        to="https://github.com/MaxwellKJr"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="GitHub"
                      >
                        <FontAwesomeIcon icon={faGithub} />
                      </a>
                    </li>
                    <li>
                      <a
                        to="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact_info%3BZtlTnqqYSwWD90TH%2B2IOEQ%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="aedIn"
                      >
                        <FontAwesomeIcon icon={faLinkedin} />
                      </a>
                    </li>
                    <li>
                      <a
                        to="https://wa.me/265992800255"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="WhatsApp"
                      >
                        <FontAwesomeIcon icon={faWhatsapp} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Contact

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
