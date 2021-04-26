import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

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

export const allPostsQuery3 = graphql`
  query allPostsQuery3 {
    allMdx {
      nodes {
        frontmatter {
          tags
        }
      }
    }
  }
`

const Tags = ({ data }) => {
  const tags = Array.from(
    new Set(
      data.allMdx.nodes
        .map(node => node.frontmatter.tags)
        .flat(1)
        .sort()
    )
  )
  return (
    <Layout>
      <h2>Tags</h2>
      <div
        style={{
          padding: 10,
          marginBottom: 10,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))",
          gap: 10,
        }}
      >
        {tags.map(tag => {
          const src = tag.toLowerCase().replace(/ /g, "-")
          return (
            <Link
              key={`${tag}`}
              to={`/tag/${src}`}
              style={{
                textDecoration: "none",
                boxShadow: "0 0 3px #ccc",
                padding: 10,
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                height={25}
                width={25}
                style={{
                  marginRight: 10,
                  objectFit: src === "axios" ? "cover" : "unset",
                }}
                src={
                  src === "react"
                    ? reactLogo
                    : src === "gatsby"
                    ? gatsbyLogo
                    : src === "graphql"
                    ? graphqlLogo
                    : src === "node"
                    ? nodeLogo
                    : src === "material-ui"
                    ? materialUiLogo
                    : src === "redux"
                    ? reduxLogo
                    : src === "css"
                    ? cssLogo
                    : src === "gsap"
                    ? gsapLogo
                    : src === "mongodb"
                    ? mongodbLogo
                    : src === "express"
                    ? expressLogo
                    : src === "typescript"
                    ? typescriptLogo
                    : src === "heroku"
                    ? herokuLogo
                    : src === "git"
                    ? gitLogo
                    : src === "aws"
                    ? awsLogo
                    : src === "html"
                    ? htmlLogo
                    : src === "testing-library"
                    ? testingLibraryLogo
                    : src === "jest"
                    ? jestLogo
                    : src === "axios"
                    ? axiosLogo
                    : src === "docker"
                    ? dockerLogo
                    : src === "styled-components"
                    ? styledComponentsLogo
                    : src === "auth0"
                    ? auth0Logo
                    : src === "google-analytics"
                    ? googleAnalyticsLogo
                    : src === "contentful"
                    ? contentfulLogo
                    : javascriptLogo
                }
                alt=""
              />
              {tag}
            </Link>
          )
        })}
      </div>
      <Link to="/">home</Link>
      <Link to="/blog">blog</Link>
    </Layout>
  )
}

export default Tags
