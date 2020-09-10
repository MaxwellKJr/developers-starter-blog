import React from "react"
import { Link, graphql } from "gatsby"
import "materialize-css/dist/css/materialize.min.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "../img/showcase.jpg"
import "./css/index.css"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" />
      <section id="showcase">
        <div className="wrapper">
          <div className="showcase-details">
            <h1>
              The Struggling Programmer
              <br />
            </h1>
            <p className="flow-text">
              A platform to showcase my coding journey <br />
              One line of code at a time.
            </p>
            <Link to="/projects" className="btn btn-primary">
              View Projects
            </Link>
          </div>
        </div>
      </section>

      <section id="background">
        <div className="container">
          <h2>Brief background</h2>
          <div className="row">
            <div className="col s12 m6 l4" style={{ paddingLeft: "0" }}>
              <img
                src={Img}
                alt="Maxwell Kapezi, Jr"
                className="responsive-img"
              />
            </div>
            <div className="col s12 m6 l8">
              <div className="background-details">
                <p>
                  I started learning how to code in 2017 because I wanted to
                  make video games. That dream died quickly after diving head
                  first into C/C++ programming languages. Yes it was mess.
                </p>
                <p>
                  Despite my struggle(s) with C and C++, I still had an idea of
                  what programming was all about. The books that I even read
                  from even made it clear that it was all about, "Solving
                  problems by creating more problems (bugs) and making sure the
                  latter problems don't affect the way we are solving the real
                  problems."
                </p>
                <Link to="/about" className="btn-primary">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
