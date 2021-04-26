import * as React from "react"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import { Layout, Breadcrumb } from "../components"

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

export const singlePostQuery = graphql`
  query singlePostQuery($id: String!) {
    mdx(id: { eq: $id }) {
      body
      tableOfContents
      frontmatter {
        title
        slug
        tags
        image {
          childImageSharp {
            fluid {
              src
              tracedSVG
            }
          }
        }
      }
    }
  }
`

const SinglePost = ({ data, pageContext }) => {
  return (
    <Layout>
      <Breadcrumb />
      <h1>{data.mdx?.frontmatter?.title}</h1>
      {/* <img
        height={300}
        width={300}
        src={data.mdx.frontmatter.image.childImageSharp.fluid.src}
        alt=""
      /> */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, 150px)",
          gap: 10,
          padding: "20px 0",
          maxWidth: 800,
        }}
      >
        {data.mdx.frontmatter.tags.sort().map(tag => {
          const tags = tag.toLowerCase().replace(/ /g, "-")
          return (
            <Link
              key={tag}
              to={`/tag/${tags}`}
              style={{
                // display: "grid",
                // justifyItems: "center",
                textDecoration: "none",
                boxShadow: "0 0 1px ",
                padding: 3,
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                height={25}
                width={25}
                style={{
                  marginRight: 10,
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
                    : tags === "redux"
                    ? reduxLogo
                    : tags === "material-ui"
                    ? materialUiLogo
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
      {data.mdx.tableOfContents.items ? (
        <div
          style={{
            padding: 20,
            background: "#ffa",
            maxWidth: 800,
          }}
        >
          <h3>Table of Contents</h3>
          {data.mdx.tableOfContents?.items?.map((heading, i) => {
            return (
              <div key={heading.url}>
                <Link to={`#${heading.title.replace(/ /g, "-").toLowerCase()}`}>
                  {`${i + 1}. ${heading.title}`}
                </Link>
              </div>
            )
          })}
        </div>
      ) : null}
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Layout>
  )
}

export default SinglePost
