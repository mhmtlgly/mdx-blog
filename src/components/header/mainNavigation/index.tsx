import React, { Fragment } from "react"
import {
  Box,
  ListItem,
  ListItemText,
  List,
  ListItemIcon,
  Divider,
} from "@material-ui/core"

import { mainNavigation } from "./data"
import { Link } from "gatsby"

export const MainNavigation = props => {
  return (
    <Box component={"nav"} {...props}>
      <List>
        {mainNavigation.map(navigation => {
          const { icon, id, name, link } = navigation
          return (
            <Fragment key={id}>
              <ListItem button component={Link} to={link}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={name.toUpperCase()} />
              </ListItem>
              <Divider />
            </Fragment>
          )
        })}
      </List>
    </Box>
  )
}
