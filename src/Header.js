import React from "react";
import './Header.scss';
import { ExternalLink } from 'react-external-link';

const Header = () => (
    <div className="header-section">
      <div className="header">

        <div className="logo">
          <h3>Yoga</h3>
          <h5>Product Designer</h5>
        </div>

        <div className="menu">
          <ul>
            <li><p></p></li>
            <li>
            <ExternalLink href="https://iamyoga.notion.site/Yoga-Portfolio-f73d88ddd0054e25ab3fd496bde272df" style={{ color: 'inherit', textDecoration: 'inherit'}}  >
              <p > Portfolio </p>
            </ExternalLink></li>
          </ul>
          
        </div>
         
      </div> 
    </div>
);

export default Header;
