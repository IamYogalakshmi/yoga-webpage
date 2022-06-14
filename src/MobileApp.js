import React from "react";
import './MobileApp.scss';
import NFTapp from './Images/NFTapp.png';
import Wander from './Images/Wanderapp.png';
import Webpage from './Images/Instaretro.png';


const MobileApp = () => (
    <div className="mobile-app">
        <div className="mobile">

            <div className="gridone">

                <div className="title">
                    <p> Mobile App</p>
                    <div className="line"></div>
                    <h3>UI Design for mobile app using Figma tool and references
                        <br></br> form behance and dribbble </h3>
                </div>

                <div className="screenshot">
                    <img src={NFTapp} alt=""></img>
                    <h3>NFT Mobile App</h3>
                    <div className="line"></div>
                </div>
                
            </div>

            <div className="gridtwo">

                <div className="screenshot">
                    <img src={Wander} alt=""></img>
                    <h3>Travel App</h3>
                    <div className="line"></div>
                </div>

                <div className="screenshot">
                    <img src={Webpage} alt=""></img>
                    <h3>Instagram Retro</h3>
                    <div className="line"></div>
                </div>

            </div>

        </div>
    </div>
);

export default MobileApp;