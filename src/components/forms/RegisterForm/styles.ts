import { makeStyles } from "@material-ui/core/styles"

export const useRegisterFormStyles = makeStyles(theme => ({
  avatar: {
    margin: `${theme.spacing(1)}px auto`,
    backgroundColor: theme.palette.secondary.main,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))
