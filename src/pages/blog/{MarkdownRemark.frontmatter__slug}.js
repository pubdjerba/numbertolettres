import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import ToConvertForm from "../../components/forms/toConvertForm"
import { Box } from "@mui/system"
import Container from "@mui/material/Container"
export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <Container maxWidth="lg">
        <Box>
          <ToConvertForm />
          <div className="blog-post-container">
            <div className="blog-post">
              <h1>{frontmatter.title}</h1>
              <h2>{frontmatter.date}</h2>
              <div
                className="blog-post-content"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </div>
          </div>
        </Box>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        slug
        title
      }
    }
  }
`
