import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import logo from "./images/Logo-harsh-cool.png";
import { Link } from "react-router-dom";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#000',
  },
  title: {
    flexGrow: 1,
    fontFamily: 'Arial, sans-serif',
    fontSize: '2rem',
  },
  menuButton: {
    marginLeft: 'auto',
    color: '#fff',
  },
  menuPaper: {
    backgroundColor: '#666',
  },
  menuItem: {
    color: '#fff',
    '&:hover': {
      backgroundColor: '#999',
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          <img src={logo} alt="" className="logo" />
        </Typography>
        <IconButton
          className={classes.menuButton}
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={handleMenuOpen}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          PaperProps={{
            className: classes.menuPaper,
          }}
        >
          <List>
            <Link to='/' style={{ textDecoration: 'none' }}>
              <ListItem button onClick={handleMenuClose} className={classes.menuItem}>
                <ListItemText primary="Home" />
              </ListItem>
            </Link>
            <a href="https://port-folio-ten-zeta.vercel.app/" style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
              <ListItem button onClick={handleMenuClose} className={classes.menuItem}>
                <ListItemText primary="Portfolio Website" />
              </ListItem>
            </a>
          </List>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
