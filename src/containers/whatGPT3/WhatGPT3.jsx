import React from 'react';
import { Feature } from '../../components';

import './whatGPT3.css';

const WhatGPT3 = () => {
    return (
        <div className="gpt3__whatgpt3 section___margin" id="whgpt3">
            <div className="gpt3__whatpgt3-features">
                <Feature title="Who's RGI?" text="Im a Digital, Graphic, Motion and Editorial Designer, continously learning to expand my attributes." />
            </div>
            <div className="gpt3__whatgpt3-heading">
                <h1 className="gradient__text">
                    I'm a digital creative expanding mind from proyect to proyect
                </h1>
                <p> Lets conect our interests </p>
            </div>
            <div className="gpt3__whatgpt3-container">
                <Feature title="Experience" text="More than 6 years learning Adobe Graphic Suite, and a year exploring Web and App Fullstack Development." />
                <Feature title="Skills & Technologies" text="Team Work - Self powered - Emphatic - Adobe Ilustrator - Photoshoper - After Effects Designer - React JS, Angular, Ionic, Node.JS and Express.JS Padawan."/>
                <Feature title="Education" text="Publicist - Environmental Engineer - Self learned Developer on continous growth." />
            </div>
        </div>
    )
}

export default WhatGPT3
