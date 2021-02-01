import React from 'react';
import {useLocation} from 'react-router-dom';
import clsx from 'clsx';
import {
  CssBaseline,
  Drawer,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  Container,
  Grid,
  Paper,
  Link,
  Avatar
} from '@material-ui/core';


import {
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
  Notifications as NotificationsIcon,
} from '@material-ui/icons';

import { mainListItems } from './listItems';
import {adminDashboardStyles} from '../../StyledComponents/index';

export const DashboardNav = () =>{
    
    const classes = adminDashboardStyles();
    const {pathname} = useLocation();
    const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <div className={classes.root}>
        <CssBaseline />
        {pathname === '/admin-dashboard'? (
             <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
             <Toolbar className={classes.toolbar}>
               <IconButton
                 edge="start"
                 color="inherit"
                 aria-label="open drawer"
                 onClick={handleDrawerOpen}
                 className={clsx(classes.menuButton, open && classes.menuButtonHidden)}>
                 <MenuIcon />
               </IconButton>
               <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                 Admin Dashboard
               </Typography>
               <IconButton color="inherit">
                 <Avatar>F</Avatar>
               </IconButton>
             </Toolbar>
           </AppBar>
        ): null}
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
      </Drawer>
    </div>
    )
}


