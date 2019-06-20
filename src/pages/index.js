import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const usProductsEdges = data.us.edges

  return (
    <Layout>
      <SEO title="Home" />

      <div style={{ maxWidth: 300, margin: "0 auto" }}>
        {usProductsEdges.map(({ node }) => (
          <Img
            key={node.id}
            style={{ margin: 0, width: "100%" }}
            fluid={node.image[0].fluid}
          />
        ))}
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    us: allContentfulProduct(filter: { node_locale: { eq: "en-US" } }) {
      edges {
        node {
          id
          image {
            fluid(maxWidth: 600, tracedSVG: { color: "#673399" }) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
