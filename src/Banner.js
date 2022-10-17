import React from "react";
import './Banner.scss';
import Profile from './Images/profilepic.png';
import Dribble from './Images/dribble.png';
import Behance from './Images/behance.png';
import Twitter from './Images/twitter.png';
import Insta from './Images/instagram.png';
import Gmail from './Images/gmail.png';
import { ExternalLink } from 'react-external-link';

const socialmedia = [
    {
        logo : Dribble,
        link :'https://dribbble.com/iam_yogalakshmi',
    },
    {
        logo : Behance,
        link :'https://www.behance.net/yogalakrenugop1',
    },
    {
        logo : Twitter,
        link : 'https://twitter.com/iam_yogalakshmi',
    },
    {
        logo : Insta,
        link : 'https://www.instagram.com/yogalakshmi_photography/',
    },
    {
        logo : Gmail,
        link : 'mailto:iamyogalakshmi@gmail.com',
    },
];

const Header = () => (
    <div className="banner-section">
      <div className="banner">

        <div className="content">
            <h2>Hi, there</h2>
            <p>I'm Yoga</p>

            <h1>I Design, Code, Illustrate, <br></br>
                Motion Graphics & Photograph .</h1>

            <h3>I’m a Product Designer, passionate in a creative works and learning<br></br>
             new things . I worked in Web3 projects like NFT, Blindbox, DAO,<br></br>
              Metaverse and Blockchain applications.  </h3> 

            <ul>{
              socialmedia.map (p => <li>
                  <ExternalLink href={p.link}>
                      <img src={p.logo} alt="" />
                  </ExternalLink> </li>)
                 }
            </ul>

        </div>

        <div className="image">
        <img src={Profile} alt="" /> 
        </div>
       
      </div> 
    </div>
    
);

export default Header;

 /* <li>
                  <ExternalLink href="https://example.com">
                      <img src={Dribble} alt="" />
                  </ExternalLink>  </li>
                  <li>
                  <ExternalLink href="https://example.com">
                      <img src={Behance} alt="" />
                      </ExternalLink></li>
                  <li>
                  <ExternalLink href="https://twitter.com/iam_yogalakshmi">
                      <img src={Twitter} alt="" />
                      </ExternalLink></li>
                  <li>
                  <ExternalLink href="https://www.instagram.com/yogalakshmi_photography/">
                      <img src={Insta} alt="" />
                      </ExternalLink></li>
                  <li>
                  <ExternalLink href="iamyogalakshmi@gmail.com">
                      <img src={Gmail} alt="" />
                      </ExternalLink></li> */