import React from 'react';
import {makeStyles, Drawer, Divider} from '@material-ui/core';
import ListComp from './ListComp';

const DRAWER_WIDTH = 240;

const useStyles = makeStyles(theme => ({
    toolbar: theme.mixins.toolbar,
    drawer: {
        width: DRAWER_WIDTH,
        flexShrink: 0,
    },
    drawerPaper: {
      width: DRAWER_WIDTH,
    },
}))

const DrawerComp = () =>{
    const classes = useStyles();
    return (
      <Drawer 
      className={classes.drawer} 
      variant="permanent"
      classes={{
        paper: classes.drawerPaper
      }}
      anchor="left">
        <div className={classes.toolbar}></div>
        <Divider/>
        <ListComp/>
      </Drawer>)
};

export default DrawerComp;