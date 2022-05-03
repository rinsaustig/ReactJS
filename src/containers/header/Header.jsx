import React from 'react';
import './header.css';
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
    return (
        <div className="gpt3__header section__padding" id="home">
            <div className="gpt3__header-content">
                <h1 className="gradient__text">
                    Let's Build something amazing together to blow your clients minds!
                </h1>
                <p>Im a Web Graphic Designer willing to help you set your online comunication to the next level, let's jump together into the future an grow together as a unit, you put the dreams i'll put the code.</p>
                <div className="gpt3__header-content__input">
                    <input type="email" placeholder="Type your mail to keep in contact" />
                    <button type="button">Get in touch!</button>

                </div>
                <div className="gpt3__header-content__people">
                    <img src={people} alt="people"/>
                    <p>Lots of people had trusted my services</p>
                </div>
            </div>

                <div className="gpt3__header-image">
                    <img src={ai} alt="ai" />
                </div>
        </div>
    )
}

export default Header
