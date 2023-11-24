import React, { forwardRef } from 'react';
import { useLocation } from 'react-router-dom';

import { ArrowRight } from "@phosphor-icons/react";

import Link from "./Links";

const Footer = forwardRef((props, ref) => {

    const location = useLocation();
    const currentPage = location.pathname;

    const footerClub = () => {
        if (currentPage !== "/contact") {
            return (
                <div className="w-full flex flex-col items-start justify-center">
                    <div className="partner-div w-full flex flex-col items-start justify-center">
                        <div className="title flex flex-col">
                            <h2 className="h2">
                                Got an idea in mind?
                            </h2>
                            <p className='p1'>I will offer you a digital product that provides your users with a stress-free experience and maximum satisfaction.</p>
                        </div>
                        <Link type={"secondary"} href={"/contact"}>
                            <div className="icon-hold flex items-center justify-center">
                                <ArrowRight size={24} weight="regular" />
                            </div>
                            Get in touch
                        </Link>
                    </div>
                    <span className="liner secondary"></span>
                </div>
            )
        } else {
            return null;
        }
    };

    return (
        <footer className='w-full flex flex-col'>
            {footerClub()}
            <div className="slide-text">
                <div className="scrolling_text w-full flex flex-row">
                    <div className="text flex flex-row items-center justfiy-center">
                        <span className='s1'>Collaboration</span>
                        <span className='h1'>&#10042;</span>
                    </div>
                    <div className="text flex flex-row items-center justfiy-center">
                        <span className='s1'>Collaboration</span>
                        <span className='h1'>&#10042;</span>
                    </div>
                </div>
            </div>
            <div className="copyright flex flex-row justify-between items-center">
                <div className='social-media flex flex-row justify-start items-center'>
                    <Link target='_blank' type={"primary"} href={"https://twitter.com/thejudejoshua"} extra={"twitter(x)"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                            <g clipPath="url(#clip0_3658_953)">
                                <path d="M21.9802 1.39258L13.4532 10.5141M9.92888 14.2398L0.576575 24.2322M0.214844 1.41856H6.60525L23.7854 24.2173H17.395L0.214844 1.41856Z" />
                            </g>
                            <defs>
                                <clipPath id="clip0_3658_953">
                                    <rect width="24" height="24" fill="none" transform="translate(0 0.8125)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </Link>
                    <Link target='_blank' type={"primary"} href={"https://instagram.com/the.jude.joshua"} extra={"instagram"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                            <g clipPath="url(#clip0_3658_955)">
                                <path d="M17.7098 1.39258H6.28999C3.13649 1.39258 0.580078 3.94899 0.580078 7.10249V18.5223C0.580078 21.6758 3.13649 24.2322 6.28999 24.2322H17.7098C20.8633 24.2322 23.4197 21.6758 23.4197 18.5223V7.10249C23.4197 3.94899 20.8633 1.39258 17.7098 1.39258Z" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M16.5679 12.0932C16.7088 13.0436 16.5465 14.0143 16.104 14.8671C15.6615 15.7199 14.9613 16.4115 14.1031 16.8435C13.2448 17.2754 12.2723 17.4258 11.3237 17.2732C10.3751 17.1205 9.49875 16.6726 8.81936 15.9933C8.13998 15.3139 7.69211 14.4375 7.53946 13.4889C7.38682 12.5403 7.53718 11.5678 7.96915 10.7095C8.40111 9.85133 9.09269 9.15116 9.94553 8.70865C10.7984 8.26613 11.769 8.10379 12.7194 8.24473C13.6889 8.38848 14.5864 8.84023 15.2794 9.53323C15.9724 10.2262 16.4241 11.1237 16.5679 12.0932Z" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M18.2812 6.53125H18.2927" strokeLinecap="round" strokeLinejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_3658_955">
                                    <rect width="24" height="24" fill="none" transform="translate(0 0.8125)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </Link>
                    <Link target='_blank' type={"primary"} href={"https://linkedin.com/in/thejudejoshua"} extra={"linkedin"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                            <g clipPath="url(#clip0_3658_960)">
                                <path d="M6.83894 6.7687C7.09463 6.7687 7.3019 6.56142 7.3019 6.30574C7.3019 6.05005 7.09463 5.84277 6.83894 5.84277C6.58325 5.84277 6.37598 6.05005 6.37598 6.30574C6.37598 6.56142 6.58325 6.7687 6.83894 6.7687Z" />
                                <path d="M6.83984 8.44824V17.6952" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M17.623 17.6946V11.7625C17.6214 10.8102 17.2423 9.89736 16.569 9.22397C15.8956 8.55058 14.9827 8.17155 14.0304 8.16992C13.077 8.16992 12.1626 8.54823 11.4879 9.22179C10.8132 9.89536 10.4333 10.8091 10.4316 11.7625V17.6946" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M10.4316 11.7631V8.44824" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M22.185 1.39258H1.81465C1.48722 1.39258 1.1732 1.52265 0.941675 1.75417C0.710148 1.9857 0.580078 2.29972 0.580078 2.62715V22.9975C0.580078 23.3249 0.710148 23.639 0.941675 23.8705C1.1732 24.102 1.48722 24.2321 1.81465 24.2321H22.185C22.5124 24.2321 22.8265 24.102 23.058 23.8705C23.2895 23.639 23.4196 23.3249 23.4196 22.9975V2.62715C23.4196 2.29972 23.2895 1.9857 23.058 1.75417C22.8265 1.52265 22.5124 1.39258 22.185 1.39258Z" strokeLinecap="round" strokeLinejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_3658_960">
                                    <rect width="24" height="24" fill="none" transform="translate(0 0.8125)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </Link>
                </div>
                <p className='p2'>Copyright Jude Joshua 2023. All rights reserved.</p>
            </div>
        </footer>
    )
});

// Footer.displayName = 'Footer';

export default Footer;