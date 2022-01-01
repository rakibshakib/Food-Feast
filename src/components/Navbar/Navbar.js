import React from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Navbar = () => {
  return (
    <div className="nav-bar">
      <div>
        <h2 className="brand-name">Food Feast</h2>
      </div>
      <div className="nav-bar-options">
        <h4 className="explore-btn">Explore</h4>
        <div className="nav-user">
          <figure>
            <img src="img.jpg" alt="user-imge" />
          </figure>
          <h2 className="user-name">User name</h2>
          <span> <KeyboardArrowDownIcon /> </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
