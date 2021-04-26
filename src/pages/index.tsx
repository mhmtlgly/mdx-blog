import * as React from "react"
import { Layout, Pagination, FolderView } from "../components"
import { Link } from "gatsby"

const IndexPage = () => {
  return (
    <Layout>
      <h2>HOME</h2>
      <Link to="/blog">blog</Link>
      <Link to="/tags">tags</Link>
    </Layout>
  )
}

export default IndexPage
