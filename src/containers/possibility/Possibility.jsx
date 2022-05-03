import React from 'react';
import './possibility.css';
import possibilityImage from '../../assets/possibility.png';

const Possibility = () => {
    return (
        <div className="gpt3__possibility section__padding" id="possibility">
           <div className="gpt3__possibility-image">
               <img src={possibilityImage} alt="possibility"/>
           </div>
           <div className="gpt3__possibility-content">
               <h4>Allow the flow of great things to happen</h4>
               <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
               <p>Knowing the code and the graphic lenguages allows me to cross one side to another to improve new ways to comunicate effectively</p>
               <h4>Allow the flow of great things to happen</h4>
           </div>
        </div>
    )
}

export default Possibility
