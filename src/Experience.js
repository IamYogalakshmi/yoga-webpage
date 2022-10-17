import React from "react";
import './Experience.scss';
import Code from './Images/expcode.png';
import GD from './Images/expgd.png';
import MGD from './Images/expmgd.png';
import UIUX from './Images/expuiux.png';


const data = [
    {
        title :'2019',
        img : Code,
        data : 'React Js',
        data2 : '(HTML, CSS)'
    },
    {
        title :'2020',
        img : GD,
        data : 'Graphic',
        data2 : 'Design'
    },
    {
        title :'2021',
        img : MGD,
        data : 'Motion Graphic',
        data2 : 'Design'
    },
    {
        title :'2021 - 2022',
        img : UIUX,
        data : 'Product',
        data2 : 'Designing'
    },
]

const Exp = () => (
    <div className="exp-section">
        <div className="exp">

            <div className="title">
                <p>Experience</p>
                <div className="line"></div>
               
            </div>

            <div className="years">
            {
                data.map (p =>
                <div className="expdata">
                   
                    <h2>{p.title}</h2>
                    <img src={p.img} alt="" />
                    <p>{p.data}</p>
                    <p>{p.data2}</p>
                   
                </div>
                )
            }
            </div>

            <div className="line2"></div>

        </div>
    </div>
);

export default Exp;