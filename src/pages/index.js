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
        <h1>The Struggling Programmer</h1>
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
