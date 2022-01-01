import React from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import useAuth from './../../hooks/useAuth';

const Navbar = () => {
  const { user, logout } = useAuth();
  return (
    <div className="nav-bar">
      <div>
        <h2 className="brand-name">Food Feast</h2>
      </div>
      <div className="nav-bar-options">
        <h4 className="explore-btn">Explore</h4>
        <h4 className="explore-btn">About Us</h4>
        <div className="nav-user">
          <figure>
            <img src="img.jpg" alt="user-imge" />
          </figure>
          <h2 className="user-name">User name</h2>
          <span> <KeyboardArrowDownIcon /> </span>
        </div>
        {
          user?.email ?
              <Box>
                  <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/dashboard">
                      <Button color="inherit">Dashboard</Button>
                  </NavLink>
                  <Button onClick={logout} color="inherit">Logout</Button>
              </Box>
              :
              <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login">
                  <Button color="inherit">Login</Button>
              </NavLink>
          }
      </div>
    </div>
  );
};

export default Navbar;
