import React from "react";
import { useLocation } from 'react-router-dom';

import Link from "./Links";
import { ArrowSquareIn } from "@phosphor-icons/react";


const SideBar = ({ isMenuClicked, closeMenu }) => {

    const location = useLocation();
    const currentPage = location.pathname;

    return (
        <div className={`menu-links-holder flex flex-row items-start justify-between ` + `${isMenuClicked ? 'menu-links-out' : ''}`}>
            <div className="menuLinks-list flex flex-col justify-center">
                <span onClick={closeMenu} className={`menuLink ` + `${currentPage === '/' ? 'active' : ''} `}>
                    <Link type={"primary"} href={"/"}>Home</Link>
                </span>
                <span onClick={closeMenu} className={`menuLink  ` + `${currentPage === '/about' ? 'active' : ''} `}>
                    <Link type={"primary"} href={"/about"}>About</Link>
                </span>
                <span onClick={closeMenu} className={`menuLink ` + `${currentPage === '/portfolio' ? 'active' : ''} `}>
                    <Link type={"primary"} href={"/portfolio"}>Work</Link>
                </span>
                <span onClick={closeMenu} className={`menuLink ` + `${currentPage === '/pricing' ? 'active' : ''} `}>
                    <Link type={"primary"} href={"/pricing"}>Pricing</Link>
                </span>
                <span onClick={closeMenu} className="menuLink">
                    <Link type={"primary"} href={"https://thejudejoshua.gumroad.com/"} target="_blank">
                        Resources
                        <ArrowSquareIn />
                    </Link>
                </span>
                <span onClick={closeMenu} className={`menuLink ` + `${currentPage === '/contact' ? 'active' : ''} `}>
                    <Link type={"primary"} href={"/contact"}>Get in touch</Link>
                </span>
            </div>
            <div onClick={closeMenu} className="menu-close flex flex-row content-center justify-center">
                <div className="menu-bars">
                    <span className="menu-bars-span top"></span>
                    <span className="menu-bars-span last"></span>
                </div>
                <p className="texter b1"></p>
            </div>
        </div>
    )
}

export default SideBar;