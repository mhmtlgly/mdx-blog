import React, { useState, Fragment } from "react"
import {
  Avatar,
  Button,
  Container,
  Typography,
  Box,
  Fade,
  Slide,
} from "@material-ui/core"
import { Alert, AlertTitle } from "@material-ui/lab"
import { MdMailOutline } from "react-icons/md"

import { FormFields } from "./formFields"
import { useContactFormStyles } from "./styles"

export const ContactForm = () => {
  const classes = useContactFormStyles()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [userData, setUserData] = useState([])

  const handleChange = e => {
    const { name, value } = e.target
    setUserData(prev => [...prev, { [name]: value }])
  }

  const onSubmit = e => {
    e.preventDefault()
    setIsSubmitting(prev => !prev)
  }

  return (
    <Box maxWidth={600} boxShadow={3} p={3} m="auto">
      <Avatar className={classes.avatar}>
        <MdMailOutline />
      </Avatar>
      <Typography component="h1" variant="h5" align="center">
        Contact Us
      </Typography>

      <Box
        component={"form"}
        width="100%"
        onSubmit={onSubmit}
        className={classes.form}
      >
        <FormFields userData={userData} setUserData={handleChange} />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          disabled={isSubmitting}
        >
          send
        </Button>
      </Box>

      <Slide
        direction="up"
        in={isSubmitting}
        timeout={500}
        mountOnEnter
        unmountOnExit
      >
        <Alert className={classes.alert} severity="success" variant="filled">
          <AlertTitle>Success</AlertTitle>
          Your Mail was submitted. Thank you.
        </Alert>
      </Slide>
    </Box>
  )
}
