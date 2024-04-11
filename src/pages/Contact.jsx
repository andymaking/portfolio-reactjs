import React, { useEffect, useLayoutEffect, useState } from 'react';
import gsap from 'gsap';

import Success from '../components/Success';

import { ArrowRight, ArrowSquareOut, ArrowFatLineRight } from "@phosphor-icons/react";

export default function Contact() {
    useEffect(() => {
        document.title = 'Contact Jude | Designing User Experiences for Increased conversions.';
    }, []);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const t1 = gsap.timeline()

            t1.from('.loadime', {
                top: "+=50",
                opacity: 0,
                duration: 0.6,
            })
        })

        return () => ctx.revert()
    }, []);

    const [successMessage, setSuccessMessage] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        const myForm = event.target;
        const formData = new FormData(myForm);

        if (!formData.get("name") || !formData.get("email") || !formData.get("message")) {
            alert("Please fill in all fields.");
            return;
        }

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString(),
        })
            .then(() => {
                myForm.reset();
                document.title = 'Message sent!';
                setSuccessMessage(true);
            })
            .catch((error) => alert(error));
    };

    return (
        <>
            {
                successMessage === true ? (
                    <Success />
                ) : (
                    <>
                        <header className="landing w-full flex flex-col items-center">
                            <div className="head w-full">
                                <div className="head-text flex flex-col items-center justify-center">
                                    <div className="head-text-top w-full">
                                        <h1 className="h1 loadime text-center">
                                            <span id='round' className='rufu'>
                                                Let's get in touch
                                            </span>
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </header>
                        <section className="main w-full flex flex-col items-center">
                            <article className="process-container w-full flex flex-row justify-between items-start">
                                <div className='contact-info flex flex-col'>
                                    <p className='p1'>
                                        Have a question, suggestion, or just want to say hello? I'd love to hear from you! Feel free to send me an email using the address below or fill out the form, and I'll get back to you as soon as possible.
                                    </p>
                                    <p className='p1 flex flex-row items-center'>
                                        <ArrowFatLineRight />
                                        <a className='flex flex-row items-center' href='mailto:Jude%20Joshua<thejudejoshua@gmail.com>'>thejudejoshua@gmail.com<ArrowSquareOut /></a>
                                    </p>
                                </div>

                                <form
                                    className='contact-form flex flex-col w-full'
                                    onSubmit={handleSubmit}
                                    name="contact-form"
                                    method="POST"
                                    netlify
                                    data-netlify="true"
                                    netlify-honeypot="bot-field"
                                >
                                    <input type="hidden" name="form-name" value="contact-form" />
                                    <div className='contact-form-group flex flex-col'>
                                        <label for="name" className='h5'>Full Name</label>
                                        <input placeholder='E.g. Jon Doe' className='contact-form-control' type="text" name="name" />
                                    </div>
                                    <div className='contact-form-group flex flex-col'>
                                        <label for="email" className='h5'>Email</label>
                                        <input placeholder='E.g. jon@doedesigns.cc' className='contact-form-control' type="email" name="email" />
                                    </div>
                                    <div className='contact-form-group message flex flex-col'>
                                        <label className='h5'>Message</label>
                                        <textarea placeholder='E.g. Hi, I would like to enquire about...' className='contact-form-control area' name='message'></textarea>
                                    </div>
                                    <div className='contact-form-group flex flex-col items-start'>
                                        <button type="submit" className='flex flex-row content-end items-center justify-start'>
                                            <div className="icon-hold flex items-center justify-center">
                                                <ArrowRight size={24} weight="regular" />
                                            </div>
                                            <span className='linkContent'>
                                                <span>
                                                    Send Message
                                                </span>
                                            </span>
                                        </button>
                                    </div>
                                </form>
                            </article>
                        </section>
                    </>
                )
            }
        </>
    )
}
