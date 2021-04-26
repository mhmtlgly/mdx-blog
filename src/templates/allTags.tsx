import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

const allTagsQuery = graphql`
  query allTagsQuery {
    allMdx {
      nodes {
        frontmatter {
          title
          slug
          tags
        }
      }
    }
  }
`

const AllTags = ({ data, pageContext }) => {
  const posts = data.allMdx.nodes.map(node => node)
  const { tags } = pageContext

  //   const myArray = tags.split(",").map(el => {
  //     return el.trim()
  //   })

  console.log(posts)
  console.log(tags)

  return (
    <React.Fragment>
      <h1>TAGS</h1>
      <pre>{JSON.stringify(tags, null, 3)}</pre>
      {tags.map(tag => {
        return (
          <React.Fragment key={tag}>
            <Link to={`/tag/${tag}`}>{tag}</Link>
          </React.Fragment>
        )
      })}

      {/* {posts.map(post => {
        const { title, slug,tags } = post.frontmatter
        return (
          <React.Fragment key={title}>
            <p>{title}</p>
            <p>{slug}</p>
            <MDXRenderer>{post.body}</MDXRenderer>
          </React.Fragment>
        )
      })} */}
    </React.Fragment>
  )
}

export default AllTags
