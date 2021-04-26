import { makeStyles } from "@material-ui/core/styles"

export const useDrawerStyles = makeStyles(theme => ({
  root: {
    "& .MuiDrawer-paper": {
      padding: "20px 20px 20px 10px",
      minWidth: 300,
    },
    "& .MuiListItemIcon-root": {
      color: theme.palette.primary.light,
      fontSize: 40,
    },
    "& #closeDrawer": {
      position: "absolute",
      top: 5,
      right: 5,
      color: theme.palette.primary.light,
      // border: `2px solid ${theme.palette.primary.light}`,
    },
  },
}))
