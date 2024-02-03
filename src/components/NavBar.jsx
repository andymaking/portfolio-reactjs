import React, { useLayoutEffect, useRef } from "react";
import gsap from 'gsap';

import Link from "./Links";
import { ArrowSquareIn } from "@phosphor-icons/react";


import { ReactComponent as Logo } from "../assets/images/newlogo.svg";

const NavBar = ({ currentPage, noPage }) => {
    const navRef = useRef(null);
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const t1 = gsap.timeline()

            t1.from('.nav-shape', {
                top: "-60px",
                opacity: 0,
                duration: 0.7,
            })

        }, navRef)

        return () => ctx.revert()
    }, []);

    const offMenu = () => {
        let ctx = gsap.context(() => {
            const t2 = gsap.timeline();

            t2.fromTo('.menuLink',
                { top: 0, opacity: 1 },
                { top: "+50", opacity: 0, duration: 0.5, stagger: 0.2 },
            ).fromTo('.menu-close',
                { right: 0, opacity: 1 },
                { right: "-70", opacity: 0, duration: 0.5 }
            ).fromTo('.menu-links-holder',
                { width: "100vw" },
                { width: 0, duration: 0.5 }
            )
        });

        return () => ctx.revert();

    };

    const onMenu = () => {
        let ctx = gsap.context(() => {
            const t1 = gsap.timeline();

            t1.fromTo('.menu-links-holder',
                { width: 0, opacity: 0 },
                { width: "100vw", opacity: 1, duration: 0.5 }
            ).fromTo('.menuLink',
                { top: "+50", opacity: 0 },
                { top: 0, opacity: 1, duration: 0.5, stagger: 0.2 },
            ).fromTo('.menu-close',
                { right: "-70", opacity: 0 },
                { right: 0, opacity: 1, duration: 0.5 }
            );
        });

        return () => ctx.revert();

    };

    const menuOut = () => {
        let ctx = gsap.context(() => {
            const t3 = gsap.timeline();

            t3.fromTo('.menuLink',
                { top: 0, opacity: 1 },
                { top: "+50", opacity: 0, duration: 0.5, stagger: 0.2 },
            ).fromTo('.menu-close',
                { right: 0, opacity: 1 },
                { right: "-70", opacity: 0, duration: 0.5 }
            ).fromTo('.menu-links-holder',
                { opacity: 1 },
                { opacity: 0, duration: 0.5 }
            )
            t3.to('.menu-links-holder',{ 
                opacity: 0,
                width: 0,
                duration: 0.1,
                delay: 1.3
            })
        });

        return () => ctx.revert();

    };


    return (
        <>
            <nav className={`nav`} ref={navRef}>
                <div className={`nav-shape flex flex-row items-center justify-between`}>
                    {currentPage === '/' &&
                        <div className="logo flex flex-row items-center justify-center">
                            <Logo />
                        </div>
                    }

                    {currentPage !== '/' &&
                        <Link type={"none"} href={"/"} aria-label="Go to homepage">
                            <div className="logo flex flex-row items-center justify-center">
                                <Logo />
                            </div>
                        </Link>
                    }

                    <div onClick={onMenu} className="menu flex flex-row content-center justify-center">
                        <div className="menu-bars flex flex-col items-end justify-center">
                            <span className="menu-bars-span top"></span>
                            <span className="menu-bars-span mid"></span>
                            <span className="menu-bars-span last"></span>
                        </div>
                        <p className="texter b1"></p>
                    </div>
                </div>
            </nav>
            <div className={`menu-links-holder h-screen flex flex-row items-start justify-between`}>

                <div className="menuLinks-list flex flex-col justify-center">
                    <span onClick={menuOut} className={`menuLink ${currentPage === '/' || (currentPage.indexOf("/portfolio/") > -1) || noPage ? 'active' : ''}`}>
                        <Link type={"primary"} href={"/"}>Home</Link>
                    </span>
                    <span onClick={menuOut} className={`menuLink ${currentPage === '/about' ? 'active' : ''}`}>
                        <Link type={"primary"} href={"/about"}>About</Link>
                    </span>
                    <span onClick={menuOut} className={`menuLink ${currentPage === '/portfolio' ? 'active' : ''}`}>
                        <Link type={"primary"} href={"/portfolio"}>Work</Link>
                    </span>
                    {/* <span onClick={menuOut} className={`menuLink ${currentPage === '/pricing' ? 'active' : ''}`}>
                        <Link type={"primary"} href={"/pricing"}>Pricing</Link>
                    </span> */}
                    <span onClick={menuOut} className={`menuLink`}>
                        <Link type={"primary"} href={"https://thejudejoshua.gumroad.com/"} target="_blank">
                            Resources
                            <ArrowSquareIn />
                        </Link>
                    </span>
                    <span onClick={menuOut} className={`menuLink ${currentPage === '/contact' ? 'active' : ''}`}>
                        <Link type={"primary"} href={"/contact"}>Get in touch</Link>
                    </span>
                </div>

                <div onClick={offMenu} className="menu-close flex flex-row content-center justify-center">
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

export default NavBar;