import React from "react";
import './MotionGraphic.scss';
import logo from './Images/youtube.png';

const MotionGraphic = () => (
    <div className="motion-graphic">
        <div className="motion">

           <p> Motion Graphics </p>
           <div className="line"></div>
           <h3>Adobe Illustrator. Adobe After Effect and Adobe premiere pro <br></br>
the graphic Designing tools used for explainer videos and intro videos </h3>

            <div className="youtube">
                <div className="box"> <img src={logo} alt=""></img> </div>
                <div className="box"> <img src={logo} alt=""></img> </div>
                <div className="box"> <img src={logo} alt=""></img> </div>
            </div>
        </div>
    </div>
);

export default MotionGraphic;