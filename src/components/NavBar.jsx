import React from "react";

const NavBar = ({ isMenuClicked, openMenu, isSecondary }) => {

    return (
        <nav className={`${isSecondary ? 'secondary' : ''} ` + `nav`}>
            <div className={`flex flex-row items-center justify-between ` + `${isMenuClicked ? 'nav-clicked' : ''}`}>
                <div className="type">
                    <p className="p1 flex flex-col">Jude Joshua<span>Lagos, Nigeria.</span></p>
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