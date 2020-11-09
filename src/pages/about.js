import React from "react"
import { Link, graphql } from "gatsby"
import BioPic from "../img/showcase.jpg"
import Layout from "../layouts/index"
import SEO from "../components/seo"
import "./css/about.css"

const About = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About" />
      <section id="about" className="showcase-about">
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
                  <h3>About me</h3>
                  <p>
                    My name is Maxwell Kapezi, Jr. I am a Web Developer from the
                    Warm Heart of Africa, Malawi <span role="img">🇲🇼</span> ,
                    currently focusing on{" "}
                    <Link
                      to="https://reactjs.org"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      React.js
                    </Link>{" "}
                    and{" "}
                    <Link
                      to="https://djangoproject.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Django
                    </Link>{" "}
                    frameworks. I am also a 2nd year Bachelor of Education (BEd)
                    - Computer Science student.
                  </p>
                  <p>
                    Apart from coding I also enjoy writing short stories, poetry
                    &amp; playing video games. I mean why not?
                  </p>

                  <p>
                    I started learning how to code in 2017 because I wanted to
                    make my own video game (yes I wanted to make video games)
                    but that dream died quick. For the whole story read my post{" "}
                    <Link to="/hello-world">Hello World</Link>
                  </p>

                  <p>
                    My journey has been slow with a lot of ups and downs hence{" "}
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
