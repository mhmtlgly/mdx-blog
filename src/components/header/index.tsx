import React, { Fragment, useState } from "react"
import { Box, AppBar, Toolbar, IconButton, Badge } from "@material-ui/core"

import { useLocation } from "@reach/router"
import { useTheme } from "@material-ui/core/styles"
import { AiOutlineMenu } from "react-icons/ai"
import {
  RiFacebookLine,
  RiTwitterLine,
  RiInstagramLine,
  RiBarChartHorizontalFill,
  RiCreativeCommonsNdLine,
  RiMenu3Line,
} from "react-icons/ri"

import { useHeaderStyles } from "./styles"
import { Logo } from "./logo"
import { Drawer } from "./drawer"
import { MainNavigation } from "./mainNavigation"

export const Header = props => {
  const location = useLocation()
  const classes = useHeaderStyles()
  const theme = useTheme()
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  // console.log(location.pathname.slice(1))

  return (
    <AppBar
      // component={AppBar}
      className={classes.root}
      color="secondary"
      // {...props}
      position={location.pathname.slice(1) === "tags" ? "relative" : "fixed"}
    >
      <Toolbar variant="dense">
        <Logo fill="white" />
        <IconButton onClick={() => setIsDrawerOpen(true)}>
          <RiMenu3Line />
        </IconButton>
      </Toolbar>
      <Drawer
        isOpen={isDrawerOpen}
        onOpen={() => setIsDrawerOpen(true)}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Logo
          color={theme.palette.primary.main}
          fontSize={25}
          fontWeight={600}
          mx="auto"
        />
        <MainNavigation />
      </Drawer>
    </AppBar>
  )
}
