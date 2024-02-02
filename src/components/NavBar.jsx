import React, { useLayoutEffect, useRef } from "react";
import gsap from 'gsap';

import Link from "./Links";

import { ReactComponent as Logo } from "../assets/images/newlogo.svg";

const NavBar = ({ openMenu, currentPage }) => {

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

    return (
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

                <div onClick={openMenu} className="menu flex flex-row content-center justify-center">
                    <div className="menu-bars flex flex-col items-end justify-center">
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