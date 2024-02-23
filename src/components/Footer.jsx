import React, { forwardRef } from 'react';
import { useLocation } from 'react-router-dom';

import { ArrowUp, EnvelopeSimple } from "@phosphor-icons/react";
import xLogo from "../assets/images/twitter-x.svg";
import linkedinLogo from "../assets/images/linkedin.svg";
import instaLogo from "../assets/images/instagram.svg";

import Link from "./Links";

const Footer = forwardRef(() => {

    const currentYear = new Date().getFullYear();

    const location = useLocation();
    const currentPage = location.pathname;

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <footer className='w-full flex flex-col'>
            {currentPage !== "/contact" && currentPage !== "/success" &&  currentPage !== "/contact/" && currentPage !== "/success/" && (
                <div className="w-full flex flex-col items-start justify-center">
                    <div className="partner-div w-full flex flex-row items-end justify-between">
                        <div className="title flex flex-col">
                            <h2 className="h2">
                                Let's<span id="round">work</span> <span id="round">together</span>to bring your idea to life!
                            </h2>
                        </div>
                        <Link type={"secondary"} href={"/contact"} extra={'livey'}>
                            <div className="footer-send grid justify-items-center items-center">
                                <div className="iconer flex items-center justify-center">
                                    <EnvelopeSimple size={64} weight='thin' />
                                </div>
                                <svg id="rotatingText" viewBox="0 0 200 200" width="200" height="200" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <defs>
                                        <path id="circle" d="M 100, 100 m -75, 0 a 75, 75 0 1, 0 150, 0 a 75, 75 0 1, 0 -150, 0"></path>
                                    </defs>
                                    <text width="400">
                                        <textPath alignmentBaseline="top" xlinkHref="#circle" className="text">
                                            Send me a message -
                                        </textPath>
                                    </text>
                                </svg>
                            </div>
                        </Link>
                    </div>
                    <span className="liner secondary"></span>
                </div>
            )}
            <div className="copyright flex flex-row justify-between items-center">
                <div className='copyright-list flex flex-row justify-start items-center'>
                    <div className='social-media flex flex-row justify-start items-center'>
                        <Link target='_blank' type={"primary"} href={"https://twitter.com/thejudejoshua"} extra={"twitter(x)"} aria-label="twitter link">
                            <img
                                src={xLogo}
                                alt='Twitter-X logo'
                            />
                        </Link>
                        <Link target='_blank' type={"primary"} href={"https://instagram.com/jude.design"} extra={"instagram"} aria-label="instagram link">
                            <img
                                src={instaLogo}
                                alt='Twitter-X logo'
                            />
                        </Link>
                        <Link target='_blank' type={"primary"} href={"https://linkedin.com/in/thejudejoshua"} extra={"linkedin"} aria-label="linkedin link">
                            <img
                                src={linkedinLogo}
                                alt='Twitter-X logo'
                            />
                        </Link>
                    </div>
                    <p className='p2'>&copy; {currentYear} Jude Joshua. All rights reserved.</p>
                </div>
                <div className='toTop flex flex-row justify-start items-center' onClick={scrollToTop}>
                    <ArrowUp />
                    <span className='p2'>Scroll to top</span>
                </div>
            </div>
        </footer>
    )
});

export default Footer;