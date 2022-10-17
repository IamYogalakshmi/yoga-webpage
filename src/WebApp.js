import React from "react";
import './WebApp.scss';
import DAO from './Images/DAO.png';
import NFTweb from './Images/NFTweb.png';
import Webpage from './Images/webpag.png';

const WebApp = () => (
    <div className="web-app">
        <div className="web">

            <div className="gridone">

                <div className="screenshot">
                    <img src={NFTweb} alt=""></img>
                    <h3>NFT Bidding Page</h3>
                    <div className="line"></div>
                </div>

                <div className="screenshot">
                    <img src={Webpage} alt=""></img>
                    <h3>Photography web Page</h3>
                    <div className="line"></div>
                </div>

            </div>

            <div className="gridtwo">

                <div className="title">
                    <p> Web App</p>
                    <div className="line"></div>
                    <h3>Web Application for web 3 platforms like NFT marketplace, <br></br>
                          Metaverse, Crypto wallets. </h3>
                </div>

                <div className="screenshot">
                    <img src={DAO} alt=""></img>
                    <h3>DAO Proposal Page</h3>
                    <div className="line"></div>
                </div>
                
            </div>

        </div>
    </div>
);

export default WebApp;