import React from 'react';
import {AppBar, Toolbar, Typography, makeStyles, IconButton, Button} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const DRAWER_WIDTH = 240;

const useStyles = makeStyles(theme => ({
    appBar: {
          width: `calc(100% - ${DRAWER_WIDTH}px)`,
          marginLeft: DRAWER_WIDTH
      },
    menuButton: {
        marginRight: theme.spacing(2),
      },
    title: {
        flexGrow: 1
      }
}))

const AppBarComp = () =>{
    const classes = useStyles();
    return (
    <AppBar position="fixed" color="primary" className={classes.appBar}>
          <Toolbar>
              <IconButton aria-label="menu" color="inherit" className={classes.menuButton}>
                  
                <MenuIcon/>
              </IconButton>
            <Typography variant="h6" className={classes.title}>
              derder    
            </Typography>
            <Button variant="text" color="inherit" >
              Login
            </Button>
          </Toolbar>
        </AppBar>)
};

export default AppBarComp;