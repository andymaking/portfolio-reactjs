import React from "react";

import { ReactComponent as Logo } from "../assets/images/newlogo.svg";

const NavBar = ({ isMenuClicked, openMenu, isSecondary }) => {

    return (
        <nav className={`${isSecondary ? 'secondary' : ''} ` + `nav`}>
            <div className={`flex flex-row items-center justify-between ` + `${isMenuClicked ? 'nav-clicked' : ''}`}>
                <div className="type">
                    <p className="p2">Digital product designer<br />based in Lagos, Nigeria.</p>
                </div>
                <div className="logo flex flex-row items-center justify-center">
                    <Logo width="100" height="36" />
                </div>
                <div onClick={openMenu} className="menu flex flex-row content-center justify-center">
                    <div className="menu-bars flex flex-col items-start justify-center">
                        <span className="menu-bars-span top"></span>
                        <span className="menu-bars-span mid"></span>
                        <span className="menu-bars-span last"></span>
                    </div>
                    <p className="texter b1"></p>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;