import {withStyles, makeStyles} from '@material-ui/core/styles';
import { TextField, OutlinedInput } from '@material-ui/core';

const drawerWidth = 240;
export const minDrawerWidth = 50;
export const maxDrawerWidth = 1000;
export const drawerPaperWidth = 260
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
  
})(OutlinedInput);



export const adminDashboardStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

export const reportDrawerStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerPaperWidth,
    marginTop: 91,
    border: '2px solid #ccc'
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },

  dragger: {
    width: "5px",
    cursor: "ew-resize",
    padding: "4px 0 0",
    borderTop: "1px solid #ddd",
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    zIndex: 100,
    backgroundColor: "#f4f7f9"
  },
  selectedBackground: {
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
  }
}))