import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Dashboard, TableChart, CalendarToday, BarChart, ViewKanban } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <List>
      <ListItem button component={Link} to="/">
        <ListItemIcon><Dashboard /></ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem button component={Link} to="/tables">
        <ListItemIcon><TableChart /></ListItemIcon>
        <ListItemText primary="Tables" />
      </ListItem>
      <ListItem button component={Link} to="/calendar">
        <ListItemIcon><CalendarToday /></ListItemIcon>
        <ListItemText primary="Calendar" />
      </ListItem>
      <ListItem button component={Link} to="/charts">
        <ListItemIcon><BarChart /></ListItemIcon>
        <ListItemText primary="Charts" />
      </ListItem>
      <ListItem button component={Link} to="/kanban">
        <ListItemIcon><ViewKanban /></ListItemIcon>
        <ListItemText primary="Kanban" />
      </ListItem>
    </List>
  );
};

export default Sidebar;
