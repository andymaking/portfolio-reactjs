import React from "react";

const ProjectsList = [
    {
        id: 1,
        featured: 1,
        name: "FirstMedtrade",
        uniqueId: "jw09a422",
        year: "2023",
        category: "Case Studies",
        type: "UX Design",
        coverImage: "/images/projects/jw09a422/5ece4797eaf5e.webp",
        coverHash: "LNIi;Qa}05og?FfQNHj[04j[~RWB",
        title: "Simplifying online access to medical supplies for 1,000+ hospitals and patients.",
        description: "FirstMedtrade is an e-commerce platform that seeks to redefine the way hospitals, doctors, and patients access and procure essential medical equipment and consumables from local vendors and international manufacturers.",
        people: {
            role: "Product designer",
            team: {
                "Product Manager": "Amina Ibrahim",
                "Lead Engineer": "Babajide Tomoshegbo",
                "Frontend Engineer": "Daniel Ige",
            }
        },
        problem: {
            why: {
                title: "Hospitals and patients lack a consistent and convenient way to stock up for their medical needs.",
                details: "The existing platform's lack of user-friendly design for registered users resulted in information overload and confusion. \n Users resorted to calls and WhatsApp messages, which always led to slow response times and user drop-offs.",
            },
            images: {
                1: {
                    image: "/images/projects/jf09a422/problems-1.webp",
                    details: "1. Homepage with multiple products, items and no specifics. The user is overwhelmed as a result and is unsure of what to click. Luckily, there’s a \"chat with us on Whatsapp button\", so they go with that."
                },
                2: {
                    image: "/images/projects/jf09a422/problems-2.webp",
                    details: "2. Long scroll to the bottom of the page. Users have to scroll far down to the bottom of the page to see the categories and sub-categories that they need. This is inefficient and takes too long."
                }
            }
        },
        insights: {
            title: "Insights obtained from the website analysis revealed complaints about the lengthy and complex user flow.",
            complaints: {
                1: "Site structure and user flow were complex to understand.",
                2: "Information overload on the site. Too many call-to-action cues.",
                3: "Not a lot of personalization when it came to user roles. Hospital vs Patient.",
                4: "Cumbersome registration processes for buyers.",
                5: "Slow loading time.",
            },
            numbers: {
                1: "74%--user bounce rates",
                2: "68%--more offline orders than online orders",
                3: "19%--user click-through rate",
            }
        },
        understand: {
            hmws: {
                title: "Questions?",
                complaints: {
                    1: "How might we simplify the site structure and user flow so it is easy for a user to understand and find their way through?",
                    2: "How might we reduce the call-to-action cues and ensure that information is a lot more streamlined and easy to find?",
                    3: "How might we make the shopping experience for hospital accounts different from when a normal user wants to buy?",
                    4: "How might we reduce the registration process for buyers so they can shop for their medical needs easily?",
                }
            },
            constraints: {
                title: "Possible roadblocks...",
                complaints: {
                    1: "User needs and personalization for the different categories of users?",
                    2: "Accessibility by some types of patients?",
                    3: "Data security and privacy - what information do we allow users to share on the platform?",
                    4: "Technical infrastructure?",
                }
            }
        },
        users: {
            title: "Unlike other e-commerce platforms, FirstMedtrade catered for users who were in a hurry or had one item they were looking for; hardly looking to browse through.",
            persona: {
                1: {
                    name: "Adebisi Kumi",
                    age: "32",
                    occupation: "Doctor",
                    image: "/images/projects/jf09a422/persona.webp",
                    quote: "It’s health, alright! I don’t have to spend 30 minutes looking for what I need. I have patients lined up and waiting for me."
                },
                2: {
                    name: "Ndifreke Daniel",
                    age: "64",
                    occupation: "Retired public servant",
                    image: "/images/projects/jf09a422/persona-2.webp",
                    quote: "Getting the right compression socks for myself is usually difficult. It’s either unavailable or very expensive. And your platform doesn’t make the work easier with its slow loading and too much text."
                },
            }
        },
        competition: {
            title: "So, I looked at how others kept their users happy...",
            competitors: {
                practo: {
                    logo: "/images/projects/jf09a422/practo.svg",
                    list: {
                        1: "Provides clear and concise information about its services.",
                        2: "Has a clean and modern design, and is visually appealing.",
                        3: "Is mobile-responsive and adapts well to different screens.",
                        4: "Has an intuitive mobile app",
                    }
                },
                ada: {
                    logo: "/images/projects/jf09a422/ada-health.svg",
                    list: {
                        1: "Clean and modern UI with excellent use of colours and text hierarchy.",
                        2: "Has human-like chat feature in the mobile app.",
                        3: "Streamlined and straightforward navigation with clear call-to-action cues.",
                    }
                },
            }
        },
        ideas: {
            title: "...and arrived at these ideas.",
            ideaList: {
                1: "Taking away sign-ups. Enabling users to buy without having to go through the stress of registering.",
                2: "A single navbar. Minimizing task flows and removing unnecessary parts to ease the user journey and give the website the feel of a mobile app.",
                3: "Incorporating chat style to help users get the feel that they are chatting with a person behind the system.",
                4: "Making the tone more empathetic. Make it seem like the CTA cues and text understand their plight and are helping them get through.",
            }
        },
        flow: {
            1: "/images/projects/jf09a422/flow-1.webp",
            2: "/images/projects/jf09a422/flow-2.webp"
        },
        sketches: {
            title: "The ultimate goal was to take away the unneccesary scrolling behaviour. This way, users wouldn't have to scroll too far to find important information.",
            list: {
                1: {
                    images: "/images/projects/jf09a422/sketches-images - 1.webp",
                    description: "Taking away sign-ups. Enabling users to buy without having to go through the stress of registering.",
                },
                2: {
                    images: "/images/projects/jf09a422/sketches-images - 2.webp",
                    description: "Taking away sign-ups. Enabling users to buy without having to go through the stress of registering.",
                },
                3: {
                    images: "/images/projects/jf09a422/sketches-images - 3.webp",
                    description: "Taking away sign-ups. Enabling users to buy without having to go through the stress of registering.",
                },
                4: {
                    images: "/images/projects/jf09a422/sketches-images - 4.webp",
                    description: "Taking away sign-ups. Enabling users to buy without having to go through the stress of registering.",
                },
                5: {
                    images: "/images/projects/jf09a422/sketches-images - 5.webp",
                    description: "Taking away sign-ups. Enabling users to buy without having to go through the stress of registering.",
                },
                6: {
                    images: "/images/projects/jf09a422/sketches-images - 6.webp",
                    description: "Taking away sign-ups. Enabling users to buy without having to go through the stress of registering.",
                },
            }
        },
        wireframes: {
            mobile: {
                title: "",
                list: {
                    1: {
                        images: "/images/projects/jf09a422/wireframes - 1.webp",
                        description: "Home Page: Enabling users to buy without having to go through the stress of registering.",
                    },
                    2: {
                        images: "/images/projects/jf09a422/wireframes - 2.webp",
                        description: "Need help: Users can pick if they want help with simplifying products on the website or they sort through themselves.",
                    },
                    3: {
                        images: "/images/projects/jf09a422/wireframes - 3.webp",
                        description: "Search: Enabling users to buy without having to go through the stress of registering.",
                    },
                    4: {
                        images: "/images/projects/jf09a422/wireframes - 4.webp",
                        description: "Loading search results: Enabling users to buy without having to go through the stress of registering.",
                    },
                    5: {
                        images: "/images/projects/jf09a422/wireframes - 5.webp",
                        description: "Product Listings: Reducing information on the product card to make it less overwhelming.",
                    },
                    6: {
                        images: "/images/projects/jf09a422/wireframes - 6.webp",
                        description: "Product Details page: Enabling users to buy without having to go through the stress of registering.",
                    },
                    7: {
                        images: "/images/projects/jf09a422/wireframes - 7.webp",
                        description: "Cart: Enabling users to buy without having to go through the stress of registering.",
                    },
                    8: {
                        images: "/images/projects/jf09a422/wireframes - 9.webp",
                        description: "Delivery information: Enabling users to buy without having to go through the stress of registering.",
                    },
                    9: {
                        images: "/images/projects/jf09a422/wireframes - 10.webp",
                        description: "Card Info: Enabling users to buy without having to go through the stress of registering.",
                    },
                    10: {
                        images: "/images/projects/jf09a422/wireframes - 8.webp",
                        description: "Order Completed: Enabling users to buy without having to go through the stress of registering.",
                    },
                }
            },
            desktop : {
                title: "Curious to see how this would look on desktop for 60% of the user-base, I scaled up some screens for testing.",
                list: {
                    1: {
                        images: "/images/projects/jf09a422/desktop-wireframes-0.webp",
                        description: "Home Page: Enabling users to buy without having to go through the stress of registering.",
                    },
                    2: {
                        images: "/images/projects/jf09a422/desktop-wireframes-1.webp",
                        description: "Need help: Users can pick if they want help with simplifying products on the website or they sort through themselves.",
                    },
                    3: {
                        images: "/images/projects/jf09a422/desktop-wireframes-2.webp",
                        description: "Search: Enabling users to buy without having to go through the stress of registering.",
                    },
                    4: {
                        images: "/images/projects/jf09a422/desktop-wireframes-4.webp",
                        description: "Product Details: Reducing information on the product card to make it less overwhelming.",
                    },
                    5: {
                        images: "/images/projects/jf09a422/desktop-wireframes-5.webp",
                        description: "Cart: Enabling users to buy without having to go through the stress of registering.",
                    },
                    6: {
                        images: "/images/projects/jf09a422/desktop-wireframes-6.webp",
                        description: "Order Completed: Enabling users to buy without having to go through the stress of registering.",
                    }
                }
            }
        },
        testing: {
            title: "And the ideas worked! However, with some concerns.",
            complaints: {
                1: "\“Site looks loose on desktop. It’s as though you guys don’t have a lot of products.\”. Desktop users didn't like the negative space available on desktop.",
                2: "Hospital owners had concerns about whether they would have to enter their data every time they wanted to place an order or make a request.",
                3: "Stakeholders had concerns about how hospital data would be separated from the patient data.",
                4: "\“The site is not really visually appealing. I want to buy easily but I still want something that I can trust\”",
            },
            numbers: {
                1: "20%--user bounce rates",
                2: "72%--user click-through rate",
                3: "80%--faster order experience",
            }
        },
        update: {
            title: "Having identified what worked, I went on to combine both the \“guest-shopping\” functionality with the \“registered-user\” shopping experience.",
            images: {
                1: "/images/projects/jf09a422/updated-flow.webp",
            }
        },
    },
    {
        id: 2,
        featured: 0,
        name: "Pommo",
        uniqueId: "jwcdr2r1",
        year: "July 2022",
        category: "Case Studies",
        type: "UX Design",
        coverImage: "/images/projects/jwcdr2r1/65510539dad3d.webp",
        coverHash: "LIIE|g0000~q00%MRjRj00~q-;IU",
        title: "Transforming the remote work experience for urban tech workers in Nigeria by mitigating distractions and empowering them to stay focused.",
        description: "FirstMedtrade is an e-commerce platform that seeks to redefine the way hospitals, doctors, and patients access and procure essential medical equipment and consumables from local vendors and international manufacturers.",
    },
    {
        id: 3,
        featured: 1,
        name: "LunarLuxury",
        uniqueId: "jwfe0431",
        year: "January 2022",
        category: "Case Studies",
        type: "UX Design",
        coverImage: "/images/projects/jwfe0431/64957cab2f8e4.webp",
        coverHash: "LIOBuTs,}3WBEyae$*bv[8ofBrRk",
        title: "Facilitating seamless explorations of travel destinations for luxury nomads.",
        description: "FirstMedtrade is an e-commerce platform that seeks to redefine the way hospitals, doctors, and patients access and procure essential medical equipment and consumables from local vendors and international manufacturers.",
    },
    {
        id: 4,
        featured: 0,
        name: "Thrive",
        uniqueId: "jw39204a",
        year: "August 2021",
        category: "Case Studies",
        type: "UX Design",
        coverImage: "/images/projects/jw39204a/6550f3a624431.webp",
        coverHash: "LLGSZ9tR00D%J6Rjn+oz00ae~qxv",
        title: "Adding life to IT programs for engineering professionals, making access to courses less confusing and easy to navigate through.",
        description: "FirstMedtrade is an e-commerce platform that seeks to redefine the way hospitals, doctors, and patients access and procure essential medical equipment and consumables from local vendors and international manufacturers.",
    },
    {
        id: 5,
        featured: 0,
        name: "UberEats",
        uniqueId: "jw562312",
        year: "September 2022",
        category: "Visual Design",
        type: "UI Design",
        coverImage: "/images/projects/jw562312/6551f8ba92328.webp",
        coverHash: "LNR3TVof~qWBs;t7kBNG~qWBITxa",
        title: "Adding life to IT programs for engineering professionals, making access to courses less confusing and easy to navigate through.",
        description: "FirstMedtrade is an e-commerce platform that seeks to redefine the way hospitals, doctors, and patients access and procure essential medical equipment and consumables from local vendors and international manufacturers.",
    },
    {
        id: 6,
        featured: 1,
        name: "TGIT",
        uniqueId: "jwcd04r1",
        year: "June 2023",
        category: "Case Studies",
        type: "UX Design",
        coverImage: "/images/projects/jwcd04r1/6550ecff98f66.webp",
        coverHash: "LJK-Um_3~Vt501t8D%ay^*WBD+WD",
        title: "Making access to professional courses less confusing and easy to navigate through for engineers.",
        description: "FirstMedtrade is an e-commerce platform that seeks to redefine the way hospitals, doctors, and patients access and procure essential medical equipment and consumables from local vendors and international manufacturers.",
    },
    {
        id: 7,
        featured: 0,
        name: "TVNR",
        uniqueId: "jw032qa1",
        category: "Visual Design",
        type: "UI Design",
        coverImage: "/images/projects/jw032qa1/65520d74f240e.webp",
        coverHash: "L9Bh0}9F00_NoyRjay%M00.8^m4n",
        title: "Adding life to IT programs for engineering professionals, making access to courses less confusing and easy to navigate through.",
        description: "FirstMedtrade is an e-commerce platform that seeks to redefine the way hospitals, doctors, and patients access and procure essential medical equipment and consumables from local vendors and international manufacturers.",
    },
    {
        id: 7,
        featured: 0,
        name: "Hotel Capricorn",
        uniqueId: "jwa4ed01",
        year: "December 2021",
        category: "Visual Design",
        type: "UI Design",
        coverImage: "/images/projects/jwa4ed01/6551f43a99d7e.webp",
        coverHash: "LTPi-U%2~VIU%Ms:M{Rk_2RjD*xt",
        title: "Adding life to IT programs for engineering professionals, making access to courses less confusing and easy to navigate through.",
        description: "FirstMedtrade is an e-commerce platform that seeks to redefine the way hospitals, doctors, and patients access and procure essential medical equipment and consumables from local vendors and international manufacturers.",
    },
    {
        id: 8,
        featured: 1,
        name: "The Food Mag",
        uniqueId: "jwacery1",
        year: "August 2023",
        category: "Visual Design",
        type: "UI Design",
        coverImage: "/images/projects/jwacery1/6551f4b61080e.webp",
        coverHash: "LQK^mHHXMyBj~WrXM{xI4;O=-Uw4",
        title: "Designing an online food magazine for engaged reading experience.",
        description: "FirstMedtrade is an e-commerce platform that seeks to redefine the way hospitals, doctors, and patients access and procure essential medical equipment and consumables from local vendors and international manufacturers.",
    },

];

export default ProjectsList;
