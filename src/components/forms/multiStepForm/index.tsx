import React, { useState, useEffect, useRef, Fragment } from "react"
import {
  Stepper,
  Step,
  StepLabel,
  StepButton,
  Avatar,
  Typography,
  Button,
  Box,
} from "@material-ui/core"

import data from "./data.json"

export const MultiStepForm = () => {
  const [activeStep, setActiveStep] = useState(0)
  return (
    <Fragment>
      <Stepper activeStep={activeStep}>
        {data.map(data => {
          const { content, id, label, step } = data
          return (
            <Step key={id}>
              <StepLabel>{label}</StepLabel>
            </Step>
          )
        })}
      </Stepper>
      <Box>
        <Box>
          {data
            .filter((_, index) => index === activeStep)
            .map(step => step.content)}
        </Box>

        {activeStep > 0 && (
          <Button
            variant="contained"
            disabled={activeStep === 0}
            onClick={() => setActiveStep(prev => prev - 1)}
          >
            back
          </Button>
        )}
        {activeStep < data.length && (
          <Button
            variant="contained"
            color="primary"
            disabled={activeStep === data.length}
            onClick={() => setActiveStep(prev => prev + 1)}
          >
            next
          </Button>
        )}

        {activeStep === data.length && (
          <Button variant="contained" color="secondary">
            send form
          </Button>
        )}
      </Box>
    </Fragment>
  )
}
