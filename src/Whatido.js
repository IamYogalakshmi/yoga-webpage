import React from "react";
import './Whatido.scss';
import UIUX from './Images/uiux.png';
import MGD from './Images/motiongraphic.png';
import GD from './Images/illustration.png';
import Code from './Images/coding.png';
import Eduction from './Images/graduation.png';

const workdata = [
    {
        img : UIUX,
        text : 'UI/ UX Design',
    },
    {
        img : MGD,
        text : 'Motion Graphic Design',
    },
    {
        img : GD,
        text : 'Illustration & Photography',
    },
    {
        img : Code,
        text : 'React Js ( HTML, CSS )',
    },
    
];

const eductiondata = [
    {
        img : Eduction,
        text : 'Master of Computer Application',
    },
    {
        img : Eduction,
        text : 'Bachelor of Computer Science',
    },
 
    
];

const Whatido = () => (
    <div className="work-section">
        <div className="work">
            
            <div className="whatido">
                <p>What I do</p>
                <div className="line"></div>
                <ul>
                    {
                        workdata.map (p => 
                            <li>
                                <img src={p.img} alt="" />
                                <h3>{p.text}</h3>
                            </li>
                            )
                    }
                </ul>
            </div>

            <div className="eduction">
                <p>Education</p>
                <div className="line"></div>
                <ul>
                    {
                        eductiondata.map (p => 
                            <li>
                                <img src={p.img} alt="" />
                                <h3>{p.text}</h3>
                            </li>
                            )
                    }
                </ul>
            </div>

        </div>
    </div>
);

export default Whatido;