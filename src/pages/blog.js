import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Posts from "../components/posts"

const Blog = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Blog" />
      <Posts />
    </Layout>
  )
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
