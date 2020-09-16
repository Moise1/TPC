import {withStyles, makeStyles} from '@material-ui/core/styles';
import { TextField, OutlinedInput } from '@material-ui/core';


export const CustomStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      marginBottom: theme.spacing(2),
    },
    resetPasswordFields: {
      margin: theme.spacing(3),
      display: 'block',
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: '25ch',
      borderColor: '#1A5276'
    },
  }));


export const CustomTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: '#154360',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#154360',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#154360',
            },
            '&:hover fieldset': {
                borderColor: '#154360',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#154360',
            },
        },
    },

})(TextField);


export const CustomOutlinedInput = withStyles({
  root: {
      '& .PrivateNotchedOutline-root-7':{
        // border: '2px solid blue',
        '& .PrivateNotchedOutline-legend-8': {
          '& span': {
            backgroundColor: 'red'
          }
        }
      },
      
  }
  
})(OutlinedInput)