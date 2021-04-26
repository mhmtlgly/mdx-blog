import { makeStyles } from "@material-ui/core/styles"

export const useContactFormStyles = makeStyles(theme => ({
  form: {
    "& .MuiFormControl-marginNormal:not(:nth-of-type(1))": {
      marginTop: 0,
    },
  },
  avatar: {
    margin: `${theme.spacing(1)}px auto`,
    backgroundColor: theme.palette.secondary.main,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  alert: {
    position: "absolute",
    top: 0,
    left: 0,
    transform: "translate(-50%)",
  },
}))
