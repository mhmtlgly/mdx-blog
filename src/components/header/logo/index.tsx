import React from "react"
import { Box } from "@material-ui/core"
import { Link } from "gatsby"
import { useLogoStyles } from "./styles"

export const Logo = props => {
  // const { fill = "#744C9E" } = props
  const { fill } = props
  const classes = useLogoStyles(props)
  return (
    <Box
      className={classes.root}
      component={Link}
      // activeStyle={{ color: "green" }}
      display="flex"
      color="white"
      to="/"
      {...props}
    >
      <svg
        width="56px"
        height="56px"
        viewBox="0 0 256 256"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid"
      >
        <g>
          <path
            d="M128,0 C57.3075981,0 0,57.307374 0,128 C0,198.69285 57.3078221,256 128,256 C198.69285,256 256,198.692626 256,128 C256,57.307374 198.69285,0 128,0 Z M27.503973,129.334313 L126.665463,228.496027 C72.2144512,227.786305 28.2134711,183.785325 27.503973,129.334313 Z M150.496265,225.983324 L30.0166761,105.503735 C40.2328216,60.8232766 80.2223482,27.4871709 128,27.4871709 C161.397489,27.4871709 190.984927,43.7800881 209.262736,68.8464075 L195.346089,81.125855 C180.519662,59.8637627 155.886614,45.9486835 128,45.9486835 C92.4948508,45.9486835 62.259523,68.5011796 50.8311596,100.061636 L155.938588,205.169064 C181.463942,195.925651 201.095107,174.378594 207.669894,147.692325 L164.102633,147.692325 L164.102633,128.000224 L210.051317,128.000224 L210.051317,127.999776 L228.512829,127.999776 L228.512829,128 C228.512829,175.777652 195.176947,215.767178 150.496265,225.983324 Z"
            fill={fill || "#744C9E"}
            fillRule="nonzero"
          ></path>
        </g>
      </svg>
    </Box>
  )
}
