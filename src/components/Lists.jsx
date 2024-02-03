import React, { useLayoutEffect } from 'react';
import gsap from 'gsap';

import { ArrowLeft } from "@phosphor-icons/react";
import { ArrowRight } from "@phosphor-icons/react";
import { ArrowSquareIn } from "@phosphor-icons/react";

import Links from "./Links";

const List = ({ type, linkText, link }) => {

    const listings = [
        {
            home: [
                {
                    hinge: '01',
                    title: "Discovery",
                    copy: '',
                },
                {
                    hinge: '02',
                    title: "Product Research",
                    copy: '',
                },
                {
                    hinge: '03',
                    title: "Product Design",
                    copy: '',
                },
                {
                    hinge: '04',
                    title: "Interaction Design",
                    copy: '',
                },
                {
                    hinge: '05',
                    title: "Handoff",
                    copy: '',
                }
            ],
            about: [
                {
                    hinge: '2020 - 2023',
                    title: "Product Designer",
                    copy: 'FirstMedtrade Africa',
                },
                {
                    hinge: '2021 - 2022',
                    title: "UI Designer (contract)",
                    copy: 'The Victoria Nwaeke Cancer Foundation',
                },
                {
                    hinge: '2021',
                    title: "UX Designer (contract)",
                    copy: 'Thrive.Nig',
                },
                {
                    hinge: '2017 - 2020',
                    title: "Web Designer",
                    copy: 'FirstMedtrade Africa',
                },
                {
                    hinge: '2017',
                    title: "Web Design Intern",
                    copy: 'Ministry of Science, Akwa Ibom State',
                }
            ],
            pricing: [
                {
                    hinge: 'Consultation/Clarity Call',
                    title: "$300/hr",
                    copy: '',
                },
                {
                    hinge: 'Static website',
                    title: "$1,500 - $5,000",
                    copy: '',
                },
                {
                    hinge: 'Website + admin',
                    title: "$5,500 - above",
                    copy: '',
                },
                {
                    hinge: 'Mobile app only',
                    title: "$3,000 - $6,000",
                    copy: '',
                },
                {
                    hinge: 'Website + Mobile app',
                    title: "$10,000 - above",
                    copy: '',
                }
            ],
            contact: [
                {
                    title: "Email:",
                    details: 'thejudejoshua@gmail.com',
                },
                {
                    title: "Let's talk:",
                    details: 'Schedule a call',
                }
            ]
        }
    ];

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const t1 = gsap.timeline()

            t1.from(['.listnime', '.listnime_p'], {
                top: "+=50",
                opacity: 0,
                duration: 0.5,
                delay: 0.2,
                stagger: 0.2,
            })
        })
        return () => ctx.revert()
    }, []);

    const isValidEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    };

    const typeToDisplay = type;

    const listingsOfType = listings[0][typeToDisplay] || [];

    const listingElements = listingsOfType.map((listing, index) => {
        if (type === "contact") {
            return (
                <div className="listing listnime w-full flex flex-row justify-between" key={index}>
                    <p className="h4">{listing.title}</p>
                    <div className="clover flex flex-col">
                        {isValidEmail(listing.details) ? (
                            <Links target={"_blank"} extra={"h4 e-mail flex flex-row content-end items-center justify-start"} href={`mailto:${listing.details}`}>
                                {listing.details}
                                <ArrowSquareIn />
                            </Links>
                        ) : (listing.details === 'Schedule a call') ? (
                            <Links target={"_blank"} extra={"h4 e-mail flex flex-row content-end items-center justify-start"} href={`https://app.simplymeet.me/thejudejoshua/call`}>
                                {listing.details}
                                <ArrowSquareIn />
                            </Links>
                        ) : (
                            <h3 className="h4">
                                {listing.details}
                            </h3>
                        )}
                    </div>
                </div>
            )
        } else {
            return (
                <div className="listing listnime w-full flex flex-row justify-between" key={index}>
                    <h3 className="h4">{listing.hinge}</h3>
                    <div className="clover flex flex-col">
                        <h3 className="h4">{listing.title}</h3>
                        <p className="p1 listnime_p">{listing.copy}</p>
                    </div>
                </div>
            )
        }
    });

    const listingLink = () => {
        if (linkText !== "none") {
            if (type === "pricing") {
                return (
                    <Links target="_self" type={"primary"} href={`/` + link}>
                        <div className="icon-hold flex items-center justify-center">
                            <ArrowLeft size={24} weight="regular" />
                        </div>
                        {linkText}
                    </Links>
                )
            } else {
                if (type === 'about') {
                    return (
                        <Links target="_blank" type={"primary"} href={link}>
                            <div className="icon-hold flex items-center justify-center">
                                <ArrowRight size={24} weight="regular" />
                            </div>
                            <span className='linkContent'>
                                <span>
                                    {linkText}
                                </span>
                            </span>
                        </Links>
                    )
                } else {
                    return (
                        <Links target="_self" type={"primary"} href={`/` + link}>
                            <div className="icon-hold flex items-center justify-center">
                                <ArrowRight size={24} weight="regular" />
                            </div>
                            <span className='linkContent'>
                                <span>
                                    {linkText}
                                </span>
                            </span>
                        </Links>
                    )
                }
            }
        } else {
            return null;
        }
    };

    return (
        <div className="lister w-full flex flex-col items-start">
            <div className="list flex flex-col w-full items-start">
                {listingElements}
            </div>
            {listingLink()}
        </div>
    )
}

export default List;