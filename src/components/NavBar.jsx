import React from "react";
import { useLocation } from 'react-router-dom';

import Link from "./Links";

import { ReactComponent as Logo } from "../assets/images/newlogo.svg";

const NavBar = ({ isMenuClicked, openMenu }) => {

    const location = useLocation();
    const currentPage = location.pathname;

    return (
        <nav className={`nav`}>
            <div className={`flex flex-row items-center justify-between ` + `${isMenuClicked ? 'nav-clicked' : ''}`}>
                {currentPage === '/' &&
                    <div className="logo flex flex-row items-center justify-center">
                        <Logo />
                    </div>
                }

                {currentPage !== '/' &&
                    <Link type={"none"} href={"/"}>
                        <div className="logo flex flex-row items-center justify-center">
                            <Logo />
                        </div>
                    </Link>
                }

                <div
                    onClick={openMenu}
                    className="menu flex flex-row content-center justify-center"
                >
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