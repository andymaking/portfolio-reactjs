// 'use client'
import React from 'react';

import Project from '../components/Projects';
import Lists from '../components/Lists';

import EmojiSmile from "../assets/images/Smiling Face.svg";
import EmojiRocket from "../assets/images/Rocket.svg";
import EmojiSmileHeart from "../assets/images/Smiling Face With Heart Eyes.svg";
import EmojiSmileTear from "../assets/images/Smiling Face With Tear.svg";
import { ArrowDown } from "@phosphor-icons/react";
import { ArrowUp } from "@phosphor-icons/react";
import HomeImage from "../assets/images/home.webp";
import Reviewer01 from "../assets/images/review-1.webp";
import Reviewer02 from "../assets/images/review-2.webp";



export default function Home() {

    
    
    // const testimonialsContainerRef = useRef(null);


    const reviews = [
        {
            img: Reviewer01,
            name: "Amina Ibrahim",
            position: "SEO Consultant, Prosple",
            content: "I have worked with Jude on a number of occasions, and I can honestly say that he is an excellent product designer. He understands the product idea quickly, and then works to ensure that it meets with the needs of the users and requirements of the developers.\n\nJude is also very patient and willing to work with clients to make sure that their expectations are met. His work has always been of high quality, and his designs have always met the standards set by the clients.",
        },
        {
            img: Reviewer02,
            name: "Victoria Oniyide",
            position: "Communications Manager, Paaira",
            content: "I recently had the pleasure of working with Jude, a digital product designer who specializes in improving digital user experiences. I found him to be highly professional and knowledgeable about his field.\n\nHis work is meticulous and detailed, and he takes the time to test different versions of the product to ensure that it meets all of the requirements. His work has resulted in positive feedback from both users and developers, and I would recommend him without hesitation.",
        }
    ];

    return (
        <>
            <header className="landing w-full flex flex-col items-center">
                <div className="head">
                    <div className="head-text flex flex-col items-center justify-center">
                        <div className="head-text-top flex flex-col items-center justify-center">
                            <h1 className="h1 text-center">
                                Building experiences,<br />
                                <span className="h4 lighter flex items-center justify-center">user</span>
                            </h1>
                            <h1 className="h1 text-center">
                                <span className="hightlight inline-flex">one design at a time.</span>
                            </h1>
                        </div>
                        <div className="head-text-club w-full flex flex-row flex-wrap items-center justify-end">
                            <svg className="more" xmlns="http://www.w3.org/2000/svg" width="198" height="214" viewBox="0 0 198 214" fill="none">
                                <path d="M89.7699 40.7103L89.5485 39.7351L89.7699 40.7103ZM5.74629 213.289C6.08571 213.725 6.71405 213.803 7.14972 213.463L14.2495 207.932C14.6852 207.593 14.7632 206.964 14.4238 206.529C14.0844 206.093 13.456 206.015 13.0204 206.354L6.70945 211.271L1.79291 204.96C1.45349 204.524 0.825153 204.446 0.389476 204.786C-0.0462017 205.125 -0.124237 205.753 0.21518 206.189L5.74629 213.289ZM197.061 1.08202C130.516 -1.57981 98.0392 21.99 86.3181 47.5552C80.4763 60.2969 79.8326 73.4684 82.6756 83.9617C85.5073 94.4137 91.8754 102.412 100.229 104.388L100.69 102.442C93.3299 100.701 87.3352 93.5123 84.606 83.4387C81.888 73.4065 82.485 60.7146 88.1361 48.3887C99.4008 23.8191 130.919 0.437903 196.981 3.08042L197.061 1.08202ZM100.229 104.388C108.59 106.365 117.137 101.962 123.893 94.9191C130.675 87.8498 135.869 77.917 137.549 68.2862C139.227 58.6605 137.414 49.12 129.848 43.1891C122.327 37.2927 109.429 35.2214 89.5485 39.7351L89.9913 41.6855C109.663 37.2192 121.805 39.4249 128.614 44.7631C135.38 50.0668 137.187 58.7183 135.579 67.9426C133.971 77.1619 128.97 86.7372 122.45 93.5345C115.904 100.358 108.043 104.18 100.69 102.442L100.229 104.388ZM89.5485 39.7351C73.4178 43.3975 60.3828 54.0171 49.8537 68.2865C39.3267 82.5531 31.2537 100.534 25.05 119.067C12.6422 156.135 7.64511 195.623 5.54278 212.551L7.52753 212.798C9.62979 195.87 14.6088 156.56 26.9465 119.702C33.1156 101.272 41.1078 83.5077 51.463 69.4739C61.8162 55.443 74.4806 45.2071 89.9913 41.6855L89.5485 39.7351Z" />
                            </svg>
                            <div className="head-text-club-image">
                                <img
                                    src={HomeImage}
                                    alt="Jude Joshua smiling with his left hand on his head"
                                />
                            </div>
                            <p className="p1 head-text-club-grab">
                                Design generalist driving business growth by crafting experiences that users love to use.
                            </p>
                        </div>
                    </div>
                </div>
            </header>
            <section className="main w-full flex flex-col items-center">
                <article className="idea w-full flex flex-col">
                    <div className="title">
                        <h2 className="h2 flex flex-row">Designing
                            <span className="rolling-text">
                                <span>People</span>
                                <span>Emotions</span>
                                <span>Beliefs</span>
                                <span>Actions</span>
                            </span>
                        </h2>
                    </div>
                    <Project type={"home"} />
                </article>
                <article className="process-container w-full flex flex-col items-start">
                    <div className="title">
                        <h2 className="h2 flex flex-row items-center">Your project
                            <span className="liner"></span>
                        </h2>
                        <h2 className="h2 flex flex-row items-center">is a journey for me.</h2>
                    </div>
                    <Lists type={"home"} linkText={"View pricing guide"} link={"pricing"} />
                </article>
                <article className="testimonials-container w-full flex flex-col items-start">
                    <div className="title">
                        <h2 className="h2 flex flex-row items-center">An iterative journey,</h2>
                        <h2 className="h2 flex flex-row items-center">
                            <span className="liner secondary"></span> backed by results.
                        </h2>
                    </div>
                    <span className="liner secondary"></span>
                    <div className='data w-full flex flex-col justify-start'>
                        <div className='data-results flex flex-row items-center justify-start'>
                            <div className='data-results-left flex flex-row items-center justify-start'>
                                <div className="data-results-left-plug flex flex-col">
                                    <div className="data-results-left-plug-title flex flex-row items-center">
                                        <ArrowUp />
                                        <h3 className="h3">
                                            80%
                                        </h3>
                                    </div>
                                    <div className='data-results-left-plug-description'>
                                        <h4 className="h4">
                                            Total user satisfaction
                                        </h4>
                                    </div>
                                </div>
                                <div className="data-results-left-plug flex flex-col">
                                    <div className="data-results-left-plug-title flex flex-row items-center">
                                        <ArrowDown />
                                        <h3 className="h3">
                                            65%
                                        </h3>
                                    </div>
                                    <div className='data-results-left-plug-description'>
                                        <h4 className="h4">
                                            Total user bounce rates
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <div className="data-results-right">
                                <div className="questionsContainer flex flex-col justify-center items-center">
                                    <div className="questions">
                                        <img
                                            className='smileHeart'
                                            src={EmojiSmileHeart}
                                            alt="smileHeart emoji"
                                        />
                                        <p className="p2">The users love these!</p>
                                    </div>
                                    <div className="questions">
                                        <p className="p2">Does this color work?</p>
                                    </div>
                                    <div className="questions">
                                        <p className="p2">The interaction failed!<br />Let’s find out why.</p>
                                        <img
                                            className='smileTear'
                                            src={EmojiSmileTear}
                                            alt="smileTear emoji"
                                        />
                                    </div>
                                    <img
                                        className='smile'
                                        src={EmojiSmile}
                                        alt="smile emoji"
                                    />
                                    <img
                                        className='rocket'
                                        src={EmojiRocket}
                                        alt="rocket emoji"
                                    />
                                </div>
                            </div>
                        </div>
                        <span className="liner secondary"></span>
                        <div className="client-responses flex flex-col items-start">
                            <div className="title">
                                <p className="p1">Using an Agile approach, I continually test each component for the optimal solution that satisfies business, user, and developer requirements; never settling for “Okay...”</p>
                            </div>
                            <div className="talk flex flex-row justify-start">
                                {reviews.map((item, index) => (
                                    <div className="review w-full flex flex-col justify-between content-start" key={index}>
                                        <p className="p1">{item.content}</p>
                                        <div className="review-details flex flex-row justify-start items-center">
                                            <div className="review-details-image">
                                                <img src={item.img}
                                                    alt={`Reviewer, ${item.name}`}
                                                />
                                            </div>
                                            <div className="clave flex flex-col">
                                                <p className="p2">{item.name}</p>
                                                <p className="p2">{item.position}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </article>
                <article className="sales-container w-full flex flex-col items-start">
                    <div className="title">
                        <h2 className="h2 flex flex-row items-center">
                            I help your product<br />make more sales...
                        </h2>
                    </div>
                    <div className='sales-container-call flex flex-row items-end'>
                        <div className="sales-container-call-objects flex flex-col">
                            <h4 className="h4">01</h4>
                            <p className="p1">By providing a seamless and delightful experience, to satisfy your user needs and ensure their happiness.</p>
                        </div>
                        <div className="sales-container-call-objects flex flex-col">
                            <h4 className="h4">02</h4>
                            <p className="p1">By making you the best at solving your users' problems; delivering the fastest and easiest way to meet their needs.</p>
                        </div>
                    </div>
                </article>
            </section>
        </>
    )
}
