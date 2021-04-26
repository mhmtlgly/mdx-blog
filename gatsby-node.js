exports.createPages = async ({
  actions: { createPage },
  graphql,
  reporter,
}) => {
  const result = await graphql(`
    query mainquery {
      allMdx {
        nodes {
          id
          frontmatter {
            slug
            tags
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic("failed to create posts", result.errors)
  }

  //- ALL POSTS -

  const postsPerPage = 10
  const numberOfPages = Math.ceil(
    result.data.allMdx.nodes.length / postsPerPage
  )

  Array.from({ length: numberOfPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/page/${i + 1}`,
      component: require.resolve("./src/templates/allPosts.tsx"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numberOfPages,
        currentPage: i + 1,
      },
    })
  })

  //- SINGLE POST -

  result.data.allMdx.nodes.forEach(node => {
    const id = node.id
    const slug = node.frontmatter.slug

    createPage({
      path: `/blog/${slug}`,
      component: require.resolve("./src/templates/singlePost.tsx"),
      context: {
        id,
        slug,
      },
    })
  })

  //-  SINGLE TAG -

  result.data.allMdx.nodes.forEach(node => {
    const id = node.id
    node.frontmatter.tags.map(t => {
      const slug = t.toLowerCase().replace(/ /g, "-")
      const title = t
      createPage({
        path: `/tag/${slug}`,
        component: require.resolve("./src/templates/singleTag.tsx"),
        context: {
          id,
          tag: t.toLowerCase(),
          title,
        },
      })
    })
  })
}
