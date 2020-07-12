import React from 'react';
import {AppBar, Toolbar, Typography, makeStyles, IconButton, Button} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles(theme => ({
    offset: theme.mixins.toolbar,
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
    <div>
        <AppBar position="fixed" color="primary">
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
        </AppBar>
        <div className={classes.offset}></div>
    </div>)
};

export default AppBarComp;