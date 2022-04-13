import React from "react";
import './DigitalArt.scss';
import button from './Images/yogaillustration.png';
import illustration from './Images/digitalart.png';
import { ExternalLink } from 'react-external-link';

const DigitalArt = () => (
    <div className="digital-art">
        <div className="digital">

            <div className="data">
                <p> Digital Art </p>
                <div className="line"></div>
                <h3>Procreate illustrations using <br></br> 
                ipad and apple pencil </h3>

                <ExternalLink href="https://www.instagram.com/fine.art.carnival/">
                <img src={button} alt=""></img>
                </ExternalLink>
            </div>

            <div className="digital">
                <img src={illustration} alt=""></img>
            </div>

        </div>
    </div>
);

export default DigitalArt;