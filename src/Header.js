import React from "react";
import './Header.scss';

const Header = () => (
    <div className="header-section">
      <div className="header">

        <div className="logo">
          <h3>Yoga</h3>
          <h5>UI/UX Designer</h5>
        </div>

        <div className="menu">
          <ul>
            <li><p>About</p></li>
            <li><p>Portfolio</p></li>
          </ul>
          
        </div>
         
      </div> 
    </div>
);

export default Header;
