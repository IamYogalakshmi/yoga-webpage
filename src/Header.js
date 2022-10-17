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
            <li><p>About</p></li>
            <li>
            <ExternalLink href="https://www.behance.net/gallery/144304311/UIUX-Resume?share=1" style={{ color: 'inherit', textDecoration: 'inherit'}}  >
              <p > Portfolio </p>
            </ExternalLink></li>
          </ul>
          
        </div>
         
      </div> 
    </div>
);

export default Header;
