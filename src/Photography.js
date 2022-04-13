import React from "react";
import './Photography.scss';
import button from './Images/yogaphoto.png';
import photo from './Images/photos.png';
import { ExternalLink } from 'react-external-link';

const Photography = () => (
    <div className="photo-graphy">
        <div className="photo">

            <div className="digital">
                <img src={photo} alt=""></img>
            </div>

            <div className="data">
                <p> Photography </p>
                <div className="line"></div>
                <h3>Passionate Photographer  <br></br> 
                since 2015 </h3>
                <ExternalLink href="https://www.instagram.com/yogalakshmi_photography/">
                <img src={button} alt=""></img>
                </ExternalLink>
            </div>

        </div>
    </div>
);

export default Photography;