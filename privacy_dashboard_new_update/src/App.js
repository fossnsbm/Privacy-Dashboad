import React from 'react'
import { makeStyles } from "@material-ui/core/styles";

import LandingPage from './Components/LandingPage/LandingPage';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%',
      background: 'linear-gradient(to bottom, #3b42b0 0%,#212263 57%,#0b0f22 100%)',
      overflow: 'auto'
  },
}));

export default function App() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <LandingPage />
    </div>
  )
}
