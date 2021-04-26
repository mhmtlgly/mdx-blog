import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import { Layout } from "../components"

export const allPostsQuery = graphql`
  query allPostsQuery($skip: Int!, $limit: Int!) {
    allMdx(skip: $skip, limit: $limit) {
      nodes {
        body
        frontmatter {
          title
          slug
        }
      }
    }
  }
`

const AllPosts = ({ data, pageContext }) => {
  const posts = data.allMdx.nodes.map(node => node)
  const { currentPage, numberOfPages } = pageContext

  return (
    <Layout>
      <h1>BLOG</h1>
      {posts.map(post => {
        const { title, slug } = post.frontmatter
        return (
          <div
            key={title}
            style={{ padding: 10, marginBottom: 10, boxShadow: "0 0 3px" }}
          >
            <p>{title}</p>
            <Link to={`/blog/${slug}`}>{title}</Link>
            {/* <MDXRenderer>{post.body}</MDXRenderer> */}
          </div>
        )
      })}
    </Layout>
  )
}

export default AllPosts
