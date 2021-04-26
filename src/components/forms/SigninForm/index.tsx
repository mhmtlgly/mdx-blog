import React, { useState, useEffect, useRef } from "react"
import { Link as Gatsbylink } from "gatsby"
import {
  Container,
  Typography,
  Grid,
  Link,
  Avatar,
  Button,
  Box,
} from "@material-ui/core"
import { FaUserPlus } from "react-icons/fa"

import { useSigninFormStyles } from "./styles"
import { FormFields } from "./formFields"

export const SigninForm = () => {
  const classes = useSigninFormStyles()
  const [showPassword, setShowPassword] = useState(false)

  return (
    <Box maxWidth={600} boxShadow={3} p={3} m="auto">
      <Avatar className={classes.avatar}>
        <FaUserPlus />
      </Avatar>
      <Typography component="h1" variant="h5" align="center">
        Sign in
      </Typography>
      <Box component={"form"} onSubmit={e => e.preventDefault()}>
        <FormFields
          setShowPassword={setShowPassword}
          showPassword={showPassword}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Sign in
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link component={Gatsbylink} to="/register" variant="body2">
              Register new Account.
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}
