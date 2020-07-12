import React from 'react';
import {List, Divider, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import InboxIcon from '@material-ui/icons/MoveToInbox';

const ListComp = () =>{
    return (
    <div>
        <List component="nav">
          <ListItem button >
            <ListItemIcon><InboxIcon /></ListItemIcon>
            <ListItemText primary="Three equal" />
          </ListItem>
          <ListItem button >
            <ListItemIcon><MailIcon /></ListItemIcon>
            <ListItemText primary="SP PP equal" />
          </ListItem>
          <Divider />
        </List>
    </div>)
};

export default ListComp;