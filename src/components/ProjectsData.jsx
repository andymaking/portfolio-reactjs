import React from "react";

const ProjectsList = [
    {
        uniqueId: "jw09a422",
        
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
                title: "Hospitals and patients lacked a consistent and convenient way to stock up for their medical needs.",
                details: "Users of the platform were getting confused and leaving the website without completing their intended actions because there were no clear call-to-action cues. Consequently, they resorted to alternative methods such as calling and sending WhatsApp messages to place their orders. This caused delays in response times and created frustration among users who expected a more seamless and efficient experience.",
            },
            images: {
                1: {
                    image: "/images/jw09a422/bixj8qba0cbhhcaeq9ry.webp",
                    hash: "LBN-ZZ-o.lENNGofxuR*KdIpIA%1",
                    details: "1. Homepage with multiple products, items and no specifics. The user is overwhelmed as a result and is unsure of what to click. Luckily, there’s a \"chat with us on Whatsapp button\", so they go with that."
                },
                2: {
                    image: "/images/jw09a422/djljdy4j4onmdi2qc4xo.webp",
                    hash: "L9PG]Uxu0{V@WsWBWUt700ax~CWC",
                    details: "2. Long scroll to the bottom of the page. Users have to scroll far down to the bottom of the page to see the categories and sub-categories that they need. This is inefficient and takes too long."
                }
            }
        },
        insights: {
            title: "Insights obtained from initial website analysis revealed complaints about the lengthy and complex user flow.",
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
                    image: "/images/jw09a422/q7hnwkscwpjetun58uwm.webp",
                    hash: "LKL;a5~q.8R+DgV@.8WVxvWVV@oe",
                    quote: "It’s health, alright! I don’t have to spend 30 minutes looking for what I need. I have patients lined up and waiting for me."
                },
                2: {
                    name: "Ndifreke Daniel",
                    age: "64",
                    occupation: "Retired public servant",
                    image: "/images/jw09a422/wuoo9ireptcto4h2esch.webp",
                    hash: "LSHL}5niX.bw00aet7bH~qbbVsn$",
                    quote: "Getting the right compression socks for myself is usually difficult. It’s either unavailable or very expensive. And your platform doesn’t make the work easier with its slow loading and too much text."
                },
            }
        },
        competition: {
            title: "A noticeable trend among other health-tech platforms was their use of clear call-to-action cues and hierarchy in making important information easy to find.",
            competitors: {
                practo: {
                    screenshot: "/images/jw09a422/practo.webp",
                    hash: "L3I;}D-V00%#iKVt%zX400N@_NH@",
                    list: {
                        1: "Provides clear and concise information about its services.",
                        2: "Has a clean and modern design, and is visually appealing.",
                        3: "Is mobile-responsive and adapts well to different screens.",
                        4: "Has an intuitive mobile app",
                    }
                },
                ada: {
                    screenshot: "/images/jw09a422/ada-health.webp",
                    hash: "LAJvEo-p0BM|?bRjM{of03Rk~8s:",
                    list: {
                        1: "Clean and modern UI with excellent use of colours and text hierarchy.",
                        2: "Has human-like chat feature in the mobile app.",
                        3: "Streamlined and straightforward navigation with clear call-to-action cues.",
                    }
                },
            }
        },
        ideas: {
            title: "The next plan was to incorporate some of these ideas and see how our users would respond.",
            ideaList: {
                1: "Taking away sign-ups. Enabling users to buy without having to go through the stress of registering.",
                2: "A single navbar. Minimizing task flows and removing unnecessary parts to ease the user journey and give the website the feel of a mobile app.",
                3: "Incorporating chat style to help users get the feel that they are chatting with a person behind the system.",
                4: "Making the tone more empathetic. Make it seem like the CTA cues and text understand their plight and are helping them get through.",
            }
        },
        flow: {
            // 1: {
            //     image: "/images/jw09a422/zimmn27m5bwi2ig1k0mx.webp",
            //     hash: "LBS?Jmt7oeozxufQa|fQ~AWVWCj[",
            // },
            2: {
                title: "The goal was easy - Design a straight-forward journey and test it to see how well users would adopt them.",
                image: "/images/jw09a422/l6mf8ajdczxlyuq09xeg.webp",
                hash: "LGSsEPofxZoft7fQfQfQ~Aj[NHaz",
            },
        },
        sketches: {
            title: "With a mobile-first approach, we ensured that important information was easily accessible to users without having to scroll too much.",
            image: {
                sketch: "/images/jw09a422/sketches.webp",
                hash: "L3A,]{RQ0Lt7~pWCRjof00W:-:oL",
            }
        },
        wireframes: {
            title: "It was interesting to start by designing the mobile screens first, given the nature of the target user base. Doing so helped me understand what needed to have a high hierarchy and what didn't.",
            mobile: {
                design: "/images/jw09a422/mobile-wireframes.webp",
                hash: "L6PQjL%M0y9F~Ws8D%%M9@RPrq-;",
            },
            desktop: {
                design: "/images/jw09a422/desktop-wireframes.webp",
                hash: "L7PQpZ^+00S5^+n}jZof00In~Cs:",
            }
        },
        testing: {
            title: "We ran these ideas with a couple of users in an internal test. They loved the improvements but raised a few concerns as to what they wanted more of.",
            complaints: {
                1: "\“Site looks loose on desktop. It’s as though you guys don’t have a lot of products.\”. Desktop users didn't like the excessive negative space available on desktop.",
                2: "Hospital owners had concerns about whether they would have to enter their data every time they wanted to place an order or make a request.",
                3: "Stakeholders had concerns about how hospital data would be separated from the patient data.",
                4: "\“The site is not really visually appealing. I want to buy easily but I still want something that I can trust\”",
            },
            numbers: {
                title: "In addition to discovering more desktop users, we saw users felt more relaxed, were more curious and excited to see more while navigating through as opposed to \“having everything bumped at them from the start\”.",
                1: "10%--user bounce rates",
                2: "72%--user click-through rate",
                3: "80%--faster order experience",
            }
        },
        update: {
            title: "Having identified what worked, I went on to make changes to the flow; keeping the \“guest-shopping\” functionality for users who didn't want to log in or create a new account.",
            image: {
                img: "/images/jw09a422/inw9stij30bitctr3m3m.webp",
                hash: "L6SipqJV^j%1T0s.s:a}~AxZIpR,",
            }
        },
        branding: {
            title: "When it comes to branding, keeping things in line with what users already know, is the best way to go.",
            describe: "Our focus was to maintain a serene and gentle ambience of the platform, which was particularly important because the values we were dealing with were identical. We aimed to preserve the boldness of the design while giving it a modern look that wouldn't overwhelm users.\n\nOur primary goal was to inspire user confidence and ensure that they felt that the platform catered to their needs. We wanted them to feel that nothing was done in haste, and that every step was taken with care and consideration. To achieve this, we had to strike the perfect balance between boldness and subtlety.",
            colors: {
                base: "fefefe",
                primary: "19b8ed",
                secondary: "001973",
                accent: "f1f6ff",
                placeholders: "bababa",
                ink: "383838",
                tertiary: "122122",
            },
            typography: {
                image: "/images/jw09a422/typography.webp",
                hash: "L342y8?wIAD%-=xuRjRj8^ITxuxv",
            }
        },
        components: {
            title: "Setting the states and components for the elements.",
            images: {
                1: {
                    image: "/images/jw09a422/buttons-Links.webp",
                    hash: "L9SigSMd~Ux^R-NGkCj[t-b_M|iw",
                },
                2: {
                    image: "/images/jw09a422/form-elemments.webp",
                    hash: "L3S~x6RS_2tS_3xaWBM|%NRkD*sp",
                }
            }
        },
        finalWireframes: {
            title: "Putting all of this together, it was easier to create something that was both visually appealing and focused on streamlining the unnecessary parts of the flow.",
            images: {
                1: {
                    image: "/images/jw09a422/hifi-wireframes.webp",
                    hash: "LDP@FXIVS#bb~qxuIoof0KV@o3of",
                },
                2: {
                    image: "/images/jw09a422/hifi-wireframes-1.webp",
                    hash: "LDP@FXIVS#bb~qxuIoof0KV@o3of",
                },
                3: {
                    image: "/images/jw09a422/hifi-wireframesmobile.webp",
                    hash: "LDP@FXIVS#bb~qxuIoof0KV@o3of",
                }
            }
        },
        "final tests": {
            title: "On testing again, users showed great enthuthiasm and excitement to use the new look and they mostly agreed it was a near-perfect attempt to help them resolve their needs.",
            describe: "During testing, we observed that users displayed a remarkably high level of enthusiasm and excitement for the revamped design. They were visibly impressed by the updated look and feel of the interface and expressed their admiration for the improvements made. The updated look and feel of the interface was intuitive and user-friendly, which made it easy to understand and use.\n\nThey also mentioned that the improved design allowed for a faster and more efficient way for them to complete their tasks, which was important for them. At the end of the day, user click through rate had gone up to 80% and users were 70% more comfortable and confident to buy online than to order on WhatsApp. This overwhelmingly positive feedback provided us with valuable insight into how we could further improve the user experience and also gave us the motivation to continue to refine the interface and make it even more user-friendly and efficient.",
            list: {
                1: "This feels refreshing. The flow is simple and straightforward. The dashboard is so clean!",
                2: "It’s now very easy to find categories and look for what I need.",
                3: "I know the filters are looking better now, but I think it can be better. I find it hard to scroll through sometimes.",
                4: "I like that I can place an order without having to create an account.",
                5: "Wow! It loads so fast!",
                6: "I can now send a list? This is a great addition and I'm sure my team will love it.",
                7: "Bring back the Whatsapp button. I think it would be a nice add-on.",
            },
            img: {
                image: "/images/jw09a422/conversions-gif.gif",
                hash: "L6RDK4M,M}tjjfX6oet3}8TFR-Vv",
            }
        },
        stakeholder: {
            title: "While users enjoyed the new experience and interface, stakeholders, wanted something \“loud and full\”.",
            describe: "During our final review with stakeholders, they were concerned with whether this new interface showcased their services, as they wanted to maintain a view that had all of the services displaying at once. They wanted ads displayed on empty spaces to present a more fuller version with everything at once as it made them feel like less wasn't enough. However, after deliberations, we were able to agree that about 80% services were not in use and would best fit in later as features added on to enhance usability; once more research was done with the users to see the best way around displaying these services.\n\nSeeing as the present goal and need of these users was to search and shop, we tried to emphasize the need to have features and functionalities that improved this goal without making the system slow. Among budgetary considerations and timeline pressures, we also discussed the possibilities of rolling out these other services as part of beta tests in the future to see how users would respond to seeing them.\n\nHowever, some of the things we would fix included:",
            list: {
                1: "WhatsApp button to ease users into knowing that there is a human factor behind the scenes, if anything went wrong.",
                2: "The homepage lacked some sort of capturing effect and it looked like it catered more for a B2C audience and less of a B2B audience.",
            }
        },
        tech_constraints: {
            title: "Technical Constraints:",
            describe: "After the recent redesign of our medical e-commerce platform, we encountered several notable technical constraints that influenced the project's development and functionality. The redesign aimed to enhance user experience, implement modern design principles, and improve overall performance. However, certain technical challenges emerged during and after the process.\n\nSome of the fixes that stood out included, but not limited to:",
            list: {
                1: "Seamless integration of the redesigned user interface with existing backend systems.",
                2: "Implementing the product slider for the display of featured products on the landing page.",
                3: "Cross-browser compatibility and responsiveness across various devices. Some modals like the filters modal were not fitted properly and this affected how the website appeared on desktop and mobile.",
                4: "Breaking the product page into two - product information and product details page. There was some kind of conflict with the best way to make it work.",
            }
        },
        iterations: {
            title: "Iterations:",
            images: {
                1: {
                    image: "/images/jw09a422/hifi-wireframes.webp",
                    hash: "LDP@FXIVS#bb~qxuIoof0KV@o3of",
                },
                2: {
                    image: "/images/jw09a422/hifi-wireframes-1.webp",
                    hash: "LDP@FXIVS#bb~qxuIoof0KV@o3of",
                },
                3: {
                    image: "/images/jw09a422/hifi-wireframesmobile.webp",
                    hash: "LDP@FXIVS#bb~qxuIoof0KV@o3of",
                }
            }
        },
        conclusion: {
            title: "Conclusion:",
            describe: "Moving forward, the next steps for FirstMedtrade Africa would be to address the negative feedback received during final testing. There were a couple of complaints about the whatsapp button and about how not so user-friendly the filters functionality felt. These would be taken as potential user drop-off points and they would be addressed by carrying out additional research to know what is missing and what can be fixed to ensure at least 80% user satisfaction.\n\nWith these next steps in mind, FirstMedtrade Africa is well-positioned to redefine the way hospitals, doctors, and patients access and procure essential medical equipment and consumables from local vendors and international manufacturers.",
        },
    },
    {
        uniqueId: "jwcdr2r1",
    },
    {
        uniqueId: "jwfe0431",
    },
    {
        uniqueId: "jw39204a",
    },
    {
        uniqueId: "jw562312",
    },
    {
        uniqueId: "jwcd04r1",
    },
    {
        uniqueId: "jw032qa1",
    },
    {
        uniqueId: "jwa4ed01",
    },
    {
        uniqueId: "jwacery1",
    },

];

export default ProjectsList;
