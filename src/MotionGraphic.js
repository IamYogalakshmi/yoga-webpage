import React from "react";
import './MotionGraphic.scss';
import logo from './Images/youtube.png';
import { ExternalLink } from 'react-external-link';

const MotionGraphic = () => (
    <div className="motion-graphic">
        <div className="motion">

           <p> Motion Graphics </p>
           <div className="line"></div>
           <h3>Adobe Illustrator. Adobe After Effect and Adobe premiere pro <br></br>
the graphic Designing tools used for explainer videos and intro videos </h3>

            <div className="youtube">

                <div className="box"> 
                     <ExternalLink href="https://www.youtube.com/watch?v=eUCzIQcZ-zY">
                        <img src={logo} alt=""></img> 
                     </ExternalLink>
                </div>

                <div className="box"> 
                     <ExternalLink href="https://www.youtube.com/watch?v=EkmD-gueGbE&t=261s/">
                       <img src={logo} alt=""></img> 
                     </ExternalLink>
                </div>

                <div className="box"> 
                    <ExternalLink href="https://www.youtube.com/watch?v=LM3PWJ6jT6s&t=242s">
                        <img src={logo} alt=""></img> 
                    </ExternalLink>
                </div>
                
            </div>
        </div>
    </div>
);

export default MotionGraphic;