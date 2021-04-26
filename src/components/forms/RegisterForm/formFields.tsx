import React, { Fragment } from "react"
import {
  TextField,
  InputAdornment,
  IconButton,
  FormControl,
  InputLabel,
  Input,
  OutlinedInput,
  Box,
} from "@material-ui/core"
import { FaEyeSlash, FaEye } from "react-icons/fa"

export const FormFields = ({ showPassword = false, setShowPassword }) => {
  return (
    <Fragment>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
      />
      <FormControl variant="outlined" fullWidth>
        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
        <OutlinedInput
          name="password"
          id="standard-adornment-password"
          type={showPassword ? "text" : "password"}
          labelWidth={70}
          endAdornment={
            <InputAdornment position="end">
              <IconButton onClick={() => setShowPassword(prev => !prev)}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </Fragment>
  )
}
