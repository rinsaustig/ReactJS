import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons//ri';
import logo from '../../assets/logo.svg';
import './navbar.css';

// BEM --> Block Element Modifier -- nomenclatura CSS
const Menu = () => (
    <>
        <p><a href="#home"> Home</a></p>
        <p><a href="#whgpt3"> How's RGI ?</a></p>
        <p><a href="#skills"> Skills</a></p>
        <p><a href="#features"> Values</a></p>
        <p><a href="#possibility"> Possibilities </a></p>
        <p><a href="#CTA"> Contact! </a></p>
    </>
)

const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank')
    if (newWindow) newWindow.opener = null
}

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div className="gpt3__navbar">
            <div className="gpt3__navbar-links">
                <div className="gpt3__navbar-links_logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="gpt3__navbar-links_container">
                    <Menu />
                </div>
                <div className="gpt3__navbar-linkedin">
                    <button type="button">Linkedin Profile
                    <a href='https://www.linkedin.com/in/rodrigo-gomez-insausti-0a867b48/' target='_blank'></a>
                    </button>
                </div>
                <div className="gpt3__navbar-menu">
                    {toggleMenu
                        ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                        : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
                    }
                    {toggleMenu && (
                        <div className="gpt3__navbar-menu_container scale-up-center">
                            <div className="gpt3__navbar-menu_container-link">
                                <Menu />
                                <div className="gpt3__navbar-menu_linkedin">
                                    <button type="button">Linkedin Profile</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Navbar
