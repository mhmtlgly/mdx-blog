import React, { Fragment } from "react"
import { Box } from "@material-ui/core"

import { Footer, Header } from "../"

export const Layout = ({ children, ...props }) => {
  return (
    <Box
      // mt={8}
      // mb={3}
      // mx={3}
      display="flex"
      flexDirection="column"
      minHeight="100vh"
    >
      <Header />
      <Box
        component="main"
        flexGrow={1}
        mt={8}
        // mb={3}
        // mx={3}
        // mx={{ xs: 1, sm: 3, md: 10, lg: 20, xl: 30 }}
        mx={{ xs: 1 }}
        maxWidth={800}
        {...props}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  )
}
