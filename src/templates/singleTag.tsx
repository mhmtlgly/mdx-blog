import * as React from "react"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import { Layout } from "../components"

import gatsbyLogo from "../images/gatsby-icon.svg"
import reactLogo from "../images/react-icon.svg"
import javascriptLogo from "../images/javascript-icon.svg"
import graphqlLogo from "../images/graphql-icon.svg"
import nodeLogo from "../images/node-js-icon.svg"
import materialUiLogo from "../images/material-ui-icon.svg"
import reduxLogo from "../images/redux-icon.svg"
import cssLogo from "../images/css-icon.svg"
import gsapLogo from "../images/gsap-icon.svg"
import expressLogo from "../images/express-icon.svg"
import mongodbLogo from "../images/mongodb-icon-.svg"
import typescriptLogo from "../images/typescript-icon.svg"
import herokuLogo from "../images/heroku-icon.svg"
import gitLogo from "../images/git-icon.svg"
import awsLogo from "../images/aws-icon.svg"
import htmlLogo from "../images/html-icon.svg"
import jestLogo from "../images/jest-icon.svg"
import testingLibraryLogo from "../images/testing-library-icon.png"
import axiosLogo from "../images/axios-icon.svg"
import dockerLogo from "../images/docker-icon.svg"
import styledComponentsLogo from "../images/styled-components-icon.svg"
import auth0Logo from "../images/auth0-icon.svg"
import googleAnalyticsLogo from "../images/google-analytics-icon.svg"
import contentfulLogo from "../images/contentful-icon.svg"

export const allTagsQuery2 = graphql`
  query allTagsQuery2 {
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

const SingleCategory = ({ data, pageContext: { tag, id, title } }) => {
  const tagsNew = data.allMdx.nodes
    .map(node => node.frontmatter.tags)
    .join()
    .split(",")
    .map(node => {
      return node.trim().toLowerCase()
    })

  const filteredArray = data.allMdx.nodes.filter(node => {
    const nodes = node.frontmatter.tags
      .map(tag => tag.toLowerCase())
      .includes(tag)
    return nodes
  })

  return (
    <Layout>
      {/* <h1 style={{ textTransform: "capitalize" }}>{tag.replace("-", " ")}</h1> */}
      <h1>{title}</h1>
      {filteredArray.map(node => {
        const title = node.frontmatter.title
        const slug = node.frontmatter.slug
        const tags = node.frontmatter.tags.sort()
        return (
          <div
            key={title}
            style={{
              marginBottom: 10,
              padding: 10,
              boxShadow: "0 0 5px #aaa",
              maxWidth: 600,
            }}
          >
            <h2>
              <Link to={`/blog/${slug}`}>{title}</Link>
            </h2>
            <div
              style={{
                // display: "grid",
                // gridTemplateColumns: "repeat(auto-fit, 125px)",
                display: "flex",
                flexWrap: "wrap",
                gap: 10,
                padding: "20px 0",
                maxWidth: 800,
              }}
            >
              {tags.map(tag => {
                const tags = tag.toLowerCase().replace(/ /g, "-")
                return (
                  <Link
                    key={tag}
                    to={`/tag/${tags}`}
                    activeStyle={{ color: "#c504f5" }}
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      justifyItems: "center",
                      textDecoration: "none",
                      boxShadow: "0 0 1px ",
                      padding: 3,
                      width: "max-content",
                      alignItems: "center",
                      gap: 5,
                      fontFamily: "monospace",
                    }}
                  >
                    <img
                      height={30}
                      width={30}
                      style={{
                        // marginRight: 5,

                        objectFit: tags === "axios" ? "cover" : "unset",
                      }}
                      src={
                        tags === "react"
                          ? reactLogo
                          : tags === "gatsby"
                          ? gatsbyLogo
                          : tags === "graphql"
                          ? graphqlLogo
                          : tags === "node"
                          ? nodeLogo
                          : tags === "material-ui"
                          ? materialUiLogo
                          : tags === "redux"
                          ? reduxLogo
                          : tags === "css"
                          ? cssLogo
                          : tags === "gsap"
                          ? gsapLogo
                          : tags === "mongodb"
                          ? mongodbLogo
                          : tags === "express"
                          ? expressLogo
                          : tags === "typescript"
                          ? typescriptLogo
                          : tags === "heroku"
                          ? herokuLogo
                          : tags === "aws"
                          ? awsLogo
                          : tags === "git"
                          ? gitLogo
                          : tags === "html"
                          ? htmlLogo
                          : tags === "testing-library"
                          ? testingLibraryLogo
                          : tags === "jest"
                          ? jestLogo
                          : tags === "axios"
                          ? axiosLogo
                          : tags === "docker"
                          ? dockerLogo
                          : tags === "styled-components"
                          ? styledComponentsLogo
                          : tags === "auth0"
                          ? auth0Logo
                          : tags === "google-analytics"
                          ? googleAnalyticsLogo
                          : tags === "contentful"
                          ? contentfulLogo
                          : javascriptLogo
                      }
                      alt=""
                    />
                    <p>{tag}</p>
                  </Link>
                )
              })}
            </div>
          </div>
        )
      })}
      {/* <h1> {data.mdx.frontmatter.title}</h1>
      <MDXRenderer>{data.mdx.body}</MDXRenderer> */}
    </Layout>
  )
}

export default SingleCategory
