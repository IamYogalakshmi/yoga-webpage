import React from "react";
import './MotionGraphic.scss';
import logo from './Images/youtube.png';
import { ExternalLink } from 'react-external-link';
import image1 from './Images/youtubexperdes.png';
import image2 from './Images/youtubevaccine.png';
import image3 from './Images/youtubeventilator.png';

const MotionGraphic = () => (
    <div className="motion-graphic">
        <div className="motion">

           <p> Motion Graphics </p>
           <div className="line"></div>
           <h3>Adobe Illustrator. Adobe After Effect and Adobe premiere pro <br></br>
the graphic Designing tools used for explainer videos and intro videos </h3>

            <div className="youtube">

              <ExternalLink href="https://www.youtube.com/watch?v=eUCzIQcZ-zY">
                    <div className="box" style={{  
                                            backgroundImage: "url(" + image1 + ")", 
                                            backgroundSize: 'cover',
                                                }}> 
                            <img src={logo} alt=""></img> 
                        
                    </div>
                </ExternalLink>

                <ExternalLink href="https://www.youtube.com/watch?v=EkmD-gueGbE&t=261s/">
                    <div className="box" style={{  
                                            backgroundImage: "url(" + image2 + ")", 
                                            backgroundSize: 'cover',
                                               }}> 
                            <img src={logo} alt=""></img> 
                        
                    </div>
                </ExternalLink>

                <ExternalLink href="https://www.youtube.com/watch?v=LM3PWJ6jT6s&t=242s">                               
                    <div className="box" style={{  
                                            backgroundImage: "url(" + image3 + ")", 
                                            backgroundSize: 'cover', 
                                                }}>
                    
                            <img src={logo} alt=""></img> 
                    
                    </div>
                </ExternalLink>
                
            </div>
        </div>
    </div>
);

export default MotionGraphic;