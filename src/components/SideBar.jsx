import React, { useLayoutEffect } from 'react';
import gsap from 'gsap';

import Link from "./Links";
import { ArrowSquareIn } from "@phosphor-icons/react";


const SideBar = ({ isMenuClicked, closeMenu, currentPage, noPage }) => {
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const t1 = gsap.timeline()

            t1.from('.menuLinkout', {
                top: "+=50",
                opacity: 0,
                duration: 0.5,
                delay: 0.2,
                stagger: 0.2,
            }).from('.menu-close',{
                right: "-=40",
                opacity: 0,
                duration: 0.5
            })
        });
        return () => ctx.revert();
    }, [isMenuClicked]);

    return (
        <>
            <div className={`click-outside${isMenuClicked ? '' : ' hidden'}`} onClick={closeMenu} ></div>
            <div className={`menu-links-holder flex flex-row items-start justify-between ${isMenuClicked ? 'menu-links-out' : 'in'}`}>

                <div className="menuLinks-list flex flex-col justify-center">
                    <span onClick={closeMenu} className={`menuLink ${isMenuClicked ? 'menuLinkout' : ''} ${currentPage === '/' || (currentPage.indexOf("/portfolio/") > -1) || noPage ? 'active' : ''}`}>
                        <Link type={"primary"} href={"/"}>Home</Link>
                    </span>
                    <span onClick={closeMenu} className={`menuLink ${isMenuClicked ? 'menuLinkout' : ''} ${currentPage === '/about' ? 'active' : ''}`}>
                        <Link type={"primary"} href={"/about"}>About</Link>
                    </span>
                    <span onClick={closeMenu} className={`menuLink ${isMenuClicked ? 'menuLinkout' : ''} ${currentPage === '/portfolio' ? 'active' : ''}`}>
                        <Link type={"primary"} href={"/portfolio"}>Work</Link>
                    </span>
                    <span onClick={closeMenu} className={`menuLink ${isMenuClicked ? 'menuLinkout' : ''} ${currentPage === '/pricing' ? 'active' : ''}`}>
                        <Link type={"primary"} href={"/pricing"}>Pricing</Link>
                    </span>
                    <span onClick={closeMenu} className={`menuLink ${isMenuClicked ? 'menuLinkout' : ''}`}>
                        <Link type={"primary"} href={"https://thejudejoshua.gumroad.com/"} target="_blank">
                            Resources
                            <ArrowSquareIn />
                        </Link>
                    </span>
                    <span onClick={closeMenu} className={`menuLink ${isMenuClicked ? 'menuLinkout' : ''} ${currentPage === '/contact' ? 'active' : ''}`}>
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
        </>
    )
}

export default SideBar;