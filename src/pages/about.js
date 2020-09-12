import React from "react"
import { graphql } from "gatsby"
import BioPic from "../img/showcase.jpg"
import Layout from "../components/layout"
import SEO from "../components/seo"

const About = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About" />
      <section id="showcase">
        <div className="wrapper">
          <div className="showcase-details">
            <div className="row">
              <div className="col s12 m12 l6">
                <div className="details">
                  <div className="image">
                    <img
                      src={BioPic}
                      className="bio"
                      alt="Maxwell Kapezi, jr"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
