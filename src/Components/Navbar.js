import React, { useState } from 'react';
import logo from '../assets/logol.png';
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
        setClicked(!clicked);
    };

    const closeMobileMenu = () => setClicked(false);

    const myStyle = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    };
    const myCol = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
    };
    return (
        <nav>
            <div className="nav" style={myStyle} id="home">
                <div className="logo" style={myStyle}>
                    <a href="#home"> <img src={logo} alt="logo" /> </a>
                    <ul className={clicked ? "#navlinks active" : "#navlinks"} id="navlinks" style={myStyle}>
                        <li>
                            <AnchorLink href='#about'>About Us</AnchorLink>
                        </li>
                        <li>
                            <AnchorLink href='#solution'>Solutions</AnchorLink>
                        </li>
                        <li>
                            <AnchorLink href='#impact'>Target</AnchorLink>
                        </li>
                        <li>
                            <AnchorLink href='#contact'>Contact Us</AnchorLink>
                        </li>

                        <div style={myCol} className="nav-btn-mobile">
                            <AnchorLink href=''>
                                <button className="btn register" onClick={closeMobileMenu}>Register</button>
                            </AnchorLink>
                            <AnchorLink href=''>
                                <button className="btn login" onClick={closeMobileMenu}>Login</button>
                            </AnchorLink>
                        </div>

                    </ul>

                </div>

                <div style={myStyle} className="nav-btn-desktop">
                    <AnchorLink href=''>
                        <button className="btn register" onClick={closeMobileMenu}>Register</button>
                    </AnchorLink>
                    <AnchorLink href=''>
                        <button className="btn login" onClick={closeMobileMenu}>Login</button>
                    </AnchorLink>
                </div>
                <div id="mobile" onClick={handleClick}>
                    <FontAwesomeIcon icon={clicked ? faTimes : faBars} className='bar' />
                </div>
            </div>

        </nav>
    );
};

export default Navbar;
