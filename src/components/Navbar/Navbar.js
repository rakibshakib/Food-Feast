import React from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
// import useAuth from '../../Hooks/useAuth'
import useAuth from '../../Hooks/useAuth'


const Navbar = () => {
  const { user, logout } = useAuth();
  return (
    <div className="nav-bar">
      <div>
        <Link to='/' className='router-link brand-name'>Food Feast</Link>
      </div>
      <div className="nav-bar-options">

        <h4 className="explore-btn">Explore</h4>
        <Link className='router-link' to='/dashboard'>Dashboard</Link>
        <Link className='router-link' to='/about-us'>About Us</Link>

        <h4 className="explore-btn">Explore</h4> &nbsp; &nbsp;
        <Link className='router-link' to='/about-us'>About Us</Link> &nbsp;

        <div className="nav-user">
          <figure>
            <img src={user?.photoURL} alt="user-imge" />
          </figure>
          <h2 className="user-name">{(user?.displayName)?  user.displayName : "User Name"}</h2>
          <span> <KeyboardArrowDownIcon /> </span>
        </div>
        {
          !user?.email && <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/login">
          <Button color="inherit">Login</Button>
      </NavLink> }
            
                  {/* <Button onClick={logout} color="inherit">Logout</Button> */}
           
              
         
      </div>
    </div>
  );
};

export default Navbar;
