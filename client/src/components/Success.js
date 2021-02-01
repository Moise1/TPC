import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import {withRouter} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(10),
    },
  },
}));



const SuccessfulReport = () => {
  const classes = useStyles();

  return (
    <div className="mt-5 justify-content-center">
      <Alert severity="success">This is a success alert — check it out!</Alert>
    </div>
  );
}

export default withRouter(SuccessfulReport);