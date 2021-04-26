import React, { Fragment } from "react"
import { TextField, MenuItem } from "@material-ui/core"

export const FormFields = ({ userData, setUserData }) => (
  <Fragment>
    <TextField
      variant="outlined"
      margin="normal"
      fullWidth
      name="name"
      label="Name"
      onChange={setUserData}
      value={userData}
      autoComplete="name"
    />
    <TextField
      variant="outlined"
      margin="normal"
      fullWidth
      label="Email Address"
      name="email"
      onChange={setUserData}
      value={userData}
      autoComplete="email"
    />
    <TextField
      variant="outlined"
      margin="normal"
      fullWidth
      name="subject"
      label="Subject"
      onChange={setUserData}
      value={userData}
      autoComplete="subject"
    />
    <TextField
      variant="outlined"
      margin="normal"
      fullWidth
      multiline
      label="Your Message"
      name="message"
      onChange={setUserData}
      value={userData}
      autoComplete="message"
      rows={4}
    />
    <TextField
      variant="outlined"
      margin="normal"
      fullWidth
      select
      label="Department"
      name="department"
      onChange={setUserData}
      value={userData}
      autoComplete="department"
      rows={4}
    >
      <MenuItem value={"customer service"}>Customer Service</MenuItem>
      <MenuItem value={"accounting"}>Accounting</MenuItem>
      <MenuItem value={"general question"}>General Question</MenuItem>
    </TextField>
  </Fragment>
)
