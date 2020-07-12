import React from 'react';
import {AppBar, Toolbar, Typography, makeStyles, IconButton, Button} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AppBarComp from './AppBarComp';
import DrawerComp from './DrawerComp';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
}))

const ContainerComp = () =>{
    const classes = useStyles();
    return (
    <div className={classes.root}>
        <AppBarComp/>
        <DrawerComp/>
        
        <div className={classes.content}>
          <div className={classes.toolbar}></div>
          all body
        </div>
    </div>)
};

export default ContainerComp;