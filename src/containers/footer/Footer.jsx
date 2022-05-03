import React from 'react';
import './footer.css';
import logo from '../../assets/logo.svg';

const Footer = () => {
    return (
        <div className="gpt3__footer section__padding">
            <div className="gpt3__footer-heading">
                <h1 className="gradient__text"> Let's design our own future together</h1>
            </div>

            <div className="gpt3__footer-btn">
                <p>Allow the flow of greats things to happen</p>
            </div>

            <div className="gpt3__footer-links">
                <div className="gpt3__footer-links_logo">
                    <img src={logo} alt="Logo" />
                    <p>Rodrigo Gómez Insausti  rodrigogomezinsausti@gmail.com</p>
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>Links</h4>
                    <p>Linkedin Profile</p>
                    <p>Graphic Motion Content</p>
                    <p>Editorial Design </p>
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>Get in touch!</h4>
                    <p>+5493417204747</p>
                    <p>rodrigogomezinsausti@gmail.com</p>
                </div>
            </div>
            <div className="gpt3__footer-copyright">
                <p>2021 RGI. All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer
