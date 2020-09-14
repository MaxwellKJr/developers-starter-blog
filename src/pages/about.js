import React from "react"
import { graphql } from "gatsby"
import BioPic from "../img/showcase.jpg"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./css/about.css"

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

              <div className="col s12 m12 l6">
                <div className="about">
                  <h3>About Me</h3>
                  <p>
                    Hi, my name is Maxwell Kapezi, Jr. and I am Full Stack Web
                    Developer currently focusing on{" "}
                    <Link
                      to="https://reactjs.org"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ReactJS
                    </Link>{" "}
                    and{" "}
                    <Link
                      to="https://django.org"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Django
                    </Link>
                  </p>

                  <p>
                    I started programming in 2017 because I wanted to make my
                    own video game (yes I wanted to make video games) but that
                    dream died quick.
                  </p>
                  <p>
                    Fast forward to 2018 I then got into web development and I
                    have never stopped learning ever since. My journey has been
                    slow with a lot of ups and downs hence{" "}
                    <span className="highlight">
                      <em>The Struggling Programmer</em>
                    </span>
                    .
                  </p>
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
