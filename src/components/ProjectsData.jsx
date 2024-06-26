const ProjectsList = [
    //-----------------------------------Firstmedtrade
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
                title: "Complexities and confusion around user navigation.",
                details: "Users lacked a consistent and convenient way to stock up for their medical needs. They were confused and would leave the website without completing their intended actions because there were no clear call-to-action cues. Consequently, they resorted to alternative methods such as calling and sending WhatsApp messages to place their orders.",
            },
            images: {
                1: {
                    image: "/images/jw09a422/bixj8qba0cbhhcaeq9ry.webp",
                    hash: "LBN-ZZ-o.lENNGofxuR*KdIpIA%1",
                    details: "1. Homepage with multiple products, items and no specifics. The user is overwhelmed as a result and is unsure of what to click. Luckily, there’s a “chat with us on Whatsapp button”, so they go with that."
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
                4: "Cumbersome registration processes for hospital accounts.",
                5: "Website took more than 15 seconds to load every page.",
            },
            numbers: {
                1: "74%--user bounce rates",
                2: "98%--more offline orders",
                3: "19%--user click-through rate",
            }
        },
        understand: {
            hmws: {
                title: "And lean into the HMWs:",
                complaints: {
                    1: "How might we simplify the site structure and user flow so it is easy for a user to understand and find their way through?",
                    2: "How might we reduce the call-to-action cues and ensure that information is a lot more streamlined and easy to find?",
                    3: "How might we make the shopping experience for hospital accounts different from when a normal user wants to buy?",
                    4: "How might we reduce the registration process for hospital accounts so they can shop for their medical needs easily?",
                }
            },
            constraints: {
                title: "To understand the problem better, it was crucial to ask questions based on these insights.",
                complaints: {
                    1: "User needs and personalization for the different categories of users?",
                    2: "Accessibility by some types of patients?",
                    3: "Data security and privacy - what information do we allow users to share on the platform?",
                    4: "Technical infrastructure?",
                }
            }
        },
        target_users: {
            head: "Time-saving users",
            title: "Unlike other e-commerce platforms, FirstMedtrade catered for users who were in a hurry or had one item they were looking for; hardly looking to browse through. Through earlier insights obtained from research, we found that many of the users are busy professionals who require quick and efficient service. Based on this, the idea was to design FirstMedtrade to provide a streamlined shopping experience that saves our users time.",
            persona: {
                1: {
                    name: "Dr. Adebisi Kumi",
                    age: "32",
                    occupation: "Doctor",
                    image: "/images/jw09a422/q7hnwkscwpjetun58uwm.webp",
                    hash: "LKL;a5~q.8R+DgV@.8WVxvWVV@oe",
                    quote: "It’s health, alright! I don’t have to spend 30 minutes looking for what I need. I have patients lined up and waiting for me."
                },
                2: {
                    name: "Mr. Ndifreke Daniel",
                    age: "64",
                    occupation: "Retired public servant",
                    image: "/images/jw09a422/wuoo9ireptcto4h2esch.webp",
                    hash: "LSHL}5niX.bw00aet7bH~qbbVsn$",
                    quote: "Getting the right compression socks for myself is usually difficult. Your platform takes so long to load and when it does load, some images are not showing. It gets  very confusing trying to buy on your website."
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
                        5: "Has clear call-to-action cues",
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
            title: "Ideating on insights",
            details: "Following a thorough brainstorming session, we identified four key ideas that aligned with the needs of our target audience. Subsequently, we decided to subject these ideas to thorough testing to determine their efficacy.",
            ideaList: {
                1: "Taking away sign-ups. Enabling users to buy without having to go through the stress of registering.",
                2: "A single navbar. Minimizing task flows and removing unnecessary parts to ease the user journey and give the website the feel of a mobile app.",
                3: "Incorporating chat style to help users get the feel that they are chatting with a person behind the system.",
                4: "Making the tone more empathetic. Make it seem like the CTA cues and text understand their plight and are helping them get through.",
            }
        },
        inital_user_flows: {
            2: {
                title: "The goal was easy - Develop a simple user journey, and test it for adoption",
                images: {
                    1: {
                        image: "/images/jw09a422/l6mf8ajdczxlyuq09xeg.webp",
                        hash: "LGSsEPofxZoft7fQfQfQ~Aj[NHaz",
                    }
                }

            },
        },
        sketches: {
            title: "With a mobile-first approach, we ensured that important information was easily accessible to users without having to scroll too much.",
            image: {
                img01: {
                    sketch: "/images/jw09a422/sketches.webp",
                    hash: "L3A,]{RQ0Lt7~pWCRjof00W:-:oL",
                }
            }
        },
        wireframes: {
            title: "It was interesting to start by designing the mobile screens first, given the nature of the target user base. Doing so helped me understand what needed to have a high hierarchy and what didn't.",
            mobile: {
                design: "/images/jw09a422/mobile-wireframes.webp",
                hash: "L6PQjL%M0y9F~Ws8D%%M9@RPrq-;",
                sub: "Mobile mid-fidelity"
            },
            desktop: {
                design: "/images/jw09a422/desktop-wireframes.webp",
                hash: "L7PQpZ^+00S5^+n}jZof00In~Cs:",
                sub: "Desktop mid-fidelity"
            }
        },
        testing: {
            title: "We tested these ideas with a few users in a closed session. They liked the changes but had some suggestions for further improvements.",
            compliants: {
                1: "“Site looks loose on desktop. It’s as though you guys don’t have a lot of products”. Desktop users didn't like the excessive negative space available on desktop.",
                2: "Hospital owners had concerns about whether they would have to enter their data every time they wanted to place an order or make a request.",
                3: "Stakeholders had concerns about how hospital data would be separated from the patient data.",
                4: "“The site is not really visually appealing. I want to buy easily but I still want something that I can trust”",
                5: "“I like the chat feature. It feels like I'm talking to a real person.”",
            },
            numbers: {
                title: "In addition to discovering more desktop users, we saw users felt more relaxed, were more curious and excited to see more while navigating through as opposed to “having everything bumped at them from the start”.",
                1: "10%--user bounce rates",
                2: "74%--user click-through rate",
                3: "80%--faster order experience",
            }
        },
        final_user_flows: {
            title: "Having identified what worked, I went on to make changes to the flow; keeping the “guest-shopping” functionality for users who didn't want to log in or create a new account.",
            image: {
                img: "/images/jw09a422/inw9stij30bitctr3m3m.webp",
                hash: "L6SipqJV^j%1T0s.s:a}~AxZIpR,",
            }
        },
        branding: {
            title: "When it comes to branding, keeping things in line with what users already know, is the best way to go.",
            describe: "Our focus was to maintain a serene and gentle ambience of the platform, which was particularly important because the values were identical. We aimed to preserve the boldness of the design while giving it a modern look in a way that wouldn't overwhelm users.\n\nOur primary goal was to inspire user confidence and ensure that they felt that the platform catered to their needs. We wanted them to feel that nothing was done in haste, and that every step was taken with care and consideration. To achieve this, we had to strike the perfect balance between boldness and subtlety.",
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
                    image: "/images/jw09a422/medi.webp",
                    hash: "L9SigSMd~Ux^R-NGkCj[t-b_M|iw",
                },
                2: {
                    image: "/images/jw09a422/form-elemments.webp",
                    hash: "L3S~x6RS_2tS_3xaWBM|%NRkD*sp",
                }
            }
        },
        final_wireframes: {
            title: "Putting all of this together, it was easier to create an interface that was both visually appealing and focused on streamlining the unnecessary parts of the flow.",
            images: {
                1: {
                    title: "Sketches",
                    img: {
                        1: {
                            image: "/images/jw09a422/home.webp",
                            hash: "LcPs|-RPxtW;tQt7R,jY~ptRR+s:",
                            sub: "Home Page"
                        },
                        2: {
                            image: "/images/jw09a422/request.webp",
                            hash: "LcPs|-RPxtW;tQt7R,jY~ptRR+s:",
                            sub: "Send a list"
                        },
                        3: {
                            image: "/images/jw09a422/track.webp",
                            hash: "LcPs|-RPxtW;tQt7R,jY~ptRR+s:",
                            sub: "Track an order"
                        },
                        4: {
                            image: "/images/jw09a422/order-details.webp",
                            hash: "LcPs|-RPxtW;tQt7R,jY~ptRR+s:",
                            sub: "Order details"
                        },
                        5: {
                            image: "/images/jw09a422/login.webp",
                            hash: "LcPs|-RPxtW;tQt7R,jY~ptRR+s:",
                            sub: "Login"
                        }
                    }
                },
                2: {
                    title: "Homepage and Search",
                    img: {
                        1: {
                            image: "/images/jw09a422/onboarding-landing.webp",
                            hash: "LcPs|-RPxtW;tQt7R,jY~ptRR+s:",
                            sub: "Home Page"
                        },
                        2: {
                            image: "/images/jw09a422/onboarding-buy.webp",
                            hash: "LcPs|-RPxtW;tQt7R,jY~ptRR+s:",
                            sub: "Search"
                        },
                        3: {
                            image: "/images/jw09a422/Send-a-list.webp",
                            hash: "LcPs|-RPxtW;tQt7R,jY~ptRR+s:",
                            sub: "Send a list"
                        }
                    }
                },
                3: {
                    title: "Product directory and Cart",
                    img: {
                        1: {
                            image: "/images/jw09a422/onboarding-list.webp",
                            hash: "LcPs|-RPxtW;tQt7R,jY~ptRR+s:",
                            sub: "Products listing"
                        },
                        2: {
                            image: "/images/jw09a422/onboarding-product.webp",
                            hash: "LcPs|-RPxtW;tQt7R,jY~ptRR+s:",
                            sub: "Product page"
                        },
                        3: {
                            image: "/images/jw09a422/onboarding-cart.webp",
                            hash: "LcPs|-RPxtW;tQt7R,jY~ptRR+s:",
                            sub: "Cart page"
                        },
                        4: {
                            image: "/images/jw09a422/modal-filters-old.webp",
                            hash: "LcPs|-RPxtW;tQt7R,jY~ptRR+s:",
                            sub: "Filters modal"
                        },
                    }
                },
                4: {
                    title: "Account and Dashboard area",
                    img: {
                        1: {
                            image: "/images/jw09a422/account-register.webp",
                            hash: "LcPs|-RPxtW;tQt7R,jY~ptRR+s:",
                            sub: "Registration page"
                        },
                        2: {
                            image: "/images/jw09a422/account-register-role.webp",
                            hash: "LcPs|-RPxtW;tQt7R,jY~ptRR+s:",
                            sub: "User select role"
                        },
                        3: {
                            image: "/images/jw09a422/Dashboard-new-user.webp",
                            hash: "LcPs|-RPxtW;tQt7R,jY~ptRR+s:",
                            sub: "Dashboard for logged in users"
                        }
                    }
                },
                5: {
                    title: "Mobile screens",
                    img: {
                        1: {
                            image: "/images/jw09a422/mobile-home.webp",
                            hash: "LcPs|-RPxtW;tQt7R,jY~ptRR+s:",
                            sub: "Home page"
                        },
                        2: {
                            image: "/images/jw09a422/mobile-modal-filters.webp",
                            hash: "LcPs|-RPxtW;tQt7R,jY~ptRR+s:",
                            sub: "Filters modal"
                        },
                        3: {
                            image: "/images/jw09a422/mobile-products.webp",
                            hash: "LcPs|-RPxtW;tQt7R,jY~ptRR+s:",
                            sub: "Product page"
                        },
                        4: {
                            image: "/images/jw09a422/mobile-acct-login.webp",
                            hash: "LcPs|-RPxtW;tQt7R,jY~ptRR+s:",
                            sub: "Login"
                        },
                        5: {
                            image: "/images/jw09a422/Dashboard-mobile.webp",
                            hash: "LcPs|-RPxtW;tQt7R,jY~ptRR+s:",
                            sub: "Dashboard for logged in users"
                        }
                    }
                }
            }
        },
        final_tests: {
            title: "Results showed enthuthiasm and excitement.",
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
        stakeholder_constraints: {
            title: "One director wanted something “loud and full”",
            describe: "During our final review with the business director, one of them was concerned with whether this new interface showcased their services, as he wanted to maintain a view that had all of the services displaying at once. He wanted ads displayed on empty spaces. However, after deliberations, we were able to agree that about 80% services were not in use and would best fit in later as features added on to enhance usability; once more research was done with the users to see the best way around displaying these services.\n\nSeeing as the present goal and need of these users was to search and shop, we tried to emphasize the need to have features and functionalities that improved this goal without making the system slow. Among budgetary considerations and timeline pressures, we also discussed the possibilities of rolling out these other services as part of beta tests in the future to see how users would respond to seeing them.\n\nHowever, some of the things we would fix included:",
            list: {
                1: "WhatsApp button to ease users into knowing that there is a human factor behind the scenes, if anything went wrong.",
                2: "The homepage lacked some sort of capturing effect and it looked like it catered more for a B2C audience and less of a B2B audience.",
            }
        },
        tech_constraints: {
            title: "Technical Constraints",
            describe: "During implementation, several notable technical constraints that influenced the project's development and functionality were noted. And this redesign disrupted the plan to enhance user experience, implement modern design principles, and improve overall performance.\n\nSome of these issues that stood out included:",
            list: {
                1: "Implementing the product slider for the display of featured products on the landing page.",
                2: "Cross-browser compatibility and responsiveness across various devices. Some modals were not fitted properly and this affected how the website appeared on desktop and mobile.",
                3: "Breaking the product page into two - product information and product details page. There was some kind of conflict with the best way to make it work.",
            }
        },
        iterations: {
            intro: {
                title: "Throughout the final stages, our topmost priority was to ensure that the website's purpose and brand's mission were conveyed to users with utmost clarity, leaving no room for doubt from the moment they landed on it.\n\n Starting with, we made changes to the landing page to reflect this.",
                img: {
                    image: "/images/jw09a422/home-iteration.webp",
                    hash: "LcPs|-RPxtW;tQt7R,jY~ptRR+s:",
                    sub: "homepage"
                },
            },
            images: {
                1: {
                    title: "Product directory",
                    img: {
                        1: {
                            image: "/images/jw09a422/product.webp",
                            hash: "LcPs|-RPxtW;tQt7R,jY~ptRR+s:",
                            sub: "Product page - Merged the product description page as a section on the product page to fix engineering issue when switching pages."
                        },
                        2: {
                            image: "/images/jw09a422/productsfull.webp",
                            hash: "LcPs|-RPxtW;tQt7R,jY~ptRR+s:",
                            sub: "Products listing - took out the boxed shadows to reduce the weight of page on the user eyes."
                        },

                        3: {
                            image: "/images/jw09a422/modal-filters.webp",
                            hash: "LcPs|-RPxtW;tQt7R,jY~ptRR+s:",
                            sub: "Filters - Changed how filters were displayed to allow for all filters to be displayed properly."
                        }
                    }
                }
            }
        },
        conclusion: {
            title: "Conclusion",
            describe: "FirstMedtrade's website redesign was a major success, with a remarkable increase in user click-through rate from 19% to 74%. However, this accomplishment was not without its challenges. One of the major obstacles was the need to design a website that was both visually appealing and user-friendly while still being abe to cater for the needs of the users - to seamlessly buy from the platform.\n\nTo overcome this challenge, we learned the importance of striking a balance between aesthetics and functionality. We realized that a visually stunning website with poor navigation and layout would not achieve the desired results. Thus, we focused on creating a design that was not only visually attractive but also easy to navigate and understand.\n\nAdditionally, we aimed to design a website that had all the must-have features and functionalities without overwhelming users with too many unwanted options.\n\nDespite these challenges, we were able to create a website that not only met the business requirements but also exceeded their expectations. The lessons learned from these challenges helped us to create a design that was not only visually stunning but also user-friendly and informative. The end result was a website that achieved its objectives and helped FirstMedtrade to grow its business.",
        },
    },
    //-----------------------------------Pomo
    {
        uniqueId: "jwcdr2r1",
        people: {
            role: "Product designer",
        },
        problem: {
            why: {
                title: "Difficulty staying focused at work",
                details: "People complained a lot about how they had difficulty with staying focused and productive with work. Their major reason would always point back to an increase in burnouts from working for too long. This made them easily distracted when trying to work and they would postpone important tasks until later causing the last minute deadline-rush and a huge increase in stress levels.\n\n",
                // details: "People complained a lot about how they find difficulty in staying focused and productive with work. Their major reason would always point back to an increase in burnouts from working for too long. This made them easily distracted when trying to work and they would postpone the important tasks until later causing the last minute deadline-rush and a huge increase in stress levels.\n\nPommo provides a means for creative workers with ADHD sypmtoms and others who spend most of their time in front of their screens to be stay focused and be productive by combining the pomodoro technique with focus mode. This works by disabling distractions on their phones and desktop computers but resuming normal mode after the tasks have been completed to allow these users to keep up with other activities and keep their brain less saturated.",
            },
            images: {
                1: {
                    image: "/images/jwacery1/strt.webp",
                    hash: "LBN-ZZ-o.lENNGofxuR*KdIpIA%1",
                    details: "Image of street food"
                }
            }
        },
        challenges: {
            title: "Research revealed burnouts from staring at screens for too long.",
            details: "So much importance and priority was put into finding hotels, travel destinations, and flights. But, less attention was paid to finding the right food content. This lack of focus on food content meant that many travelers were left feeling disappointed and eager to find better food options to ensure they had an enjoyable experience.",
            painpoints: {
                1: "Users struggled to find information about street food in new locations, hindering their ability to explore and experience local culinary delights.",
                2: "Existing websites lacked personalized food content. Content were usually either outdated or never carrying the right information. The pages also lacked visual appeal and would fail to capture the attention of visitors.",
                3: "Establishing a connection between street food and the communities where it's found posed a challenge, as users were not able to easily access relevant content highlighting this aspect.",
            }
        }
    },
    {
        uniqueId: "jwfe0431",
    },
    {
        uniqueId: "jw39204a",
    },
    //-----------------------------------Uber Eats
    {
        uniqueId: "jw562312",
        people: {
            role: "Visual designer",
        },
        problem: {
            why: {
                title: "Limited time for proper meal planning and purchases.",
                details: "In the busy world of today, many professionals across different fields often struggle to maintain a healthy diet. Limited time for proper meal planning and shopping has resulted in many of them relying on convenience foods. These fast foods often do not meet the required nutritional needs of this group of people. \n\nProper meal planning takes time and delivery of food is quite expensive. Professionals who value home cooked meals are looking for a way to effectively plan for their next meals and conveniently get all the ingredients needed. Conventional food deliveries either deliver cooked meals or require a person to actively list out the ingredients and order for them.",
            },
            images: {
                1: {
                    image: "/images/jw562312/strt.webp",
                    hash: "LBN-ZZ-o.lENNGofxuR*KdIpIA%1",
                    details: "Image of street food",
                }
            }
        },
        challenges: {
            title: "Looking deeper into the problem revealed a disconnect between meal ordering and meal preparation.",
            details: "Uber Eats users faced meal planning challenges due to time constraints. Traditional grocery shopping was outdated and a disconnect between ordering and preparation was revealed the following painpoints:",
            // "Many users of Uber Eats have been facing challenges in terms of meal planning. Due to time constraints and limited availability, they have found it difficult to plan their meals and get quality food. The app's food delivery system is not enough to solve this issue, as users cannot always eat healthy with it. The traditional grocery shopping methods also seem outdated within the Uber Eats ecosystem, suggesting the need for reimagining the shopping experience. To tackle these challenges, several insights were gained.",
            painpoints: {
                1: "Users desired a more cohesive experience when using food delivery apps, including features that support both meal ordering and meal preparation.",
                2: "Despite the popularity of meal delivery services, many users still prefer to cook at home but face barriers when it comes to ingredient procurement.",
                3: "Busy professionals had a growing demand for meal planning solutions that catered to individual dietary preferences and restrictions.",
                4: "Busy professionals struggled to maintain a healthy diet due to time constraints and limited access to fresh ingredients.",
            }
        },
        understand: {
            constraints: {
                title: "This challenge was a common problem for these groups of users.",
                complaints: {
                    1: "Health conscious individuals who wanted fresh ingredients and better ways of planning meals conveniently.",
                    2: "Families where individuals had varying dietary needs and sought a convenient way to shop for all ingredients.",
                    3: "Career professionals who prioritized convenience but their busy work schedule would not allow them buy or make healthy meals.",
                }
            },
            hmws: {
                title: "Charting Success: Constructing HMWs for meaningful impact.",
                complaints: {
                    1: "How might we address the pain point of meal preparation for busy individuals by integrating a feature on Uber Eats that streamlines the entire process from recipe selection to ingredient procurement?",
                    2: "How might we integrate meal planning within a customers’ budget, and dietary preference on the UberEats platform without looking crowded?",
                    3: "How might we enhance user convenience on Uber Eats by integrating a feature that seamlessly transitions from browsing recipes to ordering ingredients for those recipes?",
                    4: "How might we simplify the process of meal planning and grocery shopping for busy professionals to support healthier eating habits?"
                }
            },
        },
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
    //-----------------------------------The Food Mag
    {
        uniqueId: "jwacery1",
        people: {
            role: "Product designer",
        },
        problem: {
            why: {
                title: "Poor discovery of street food vendors in travel locations",
                details: "Inadequate content discovery mechanisms, a lack of visual appeal, and difficulty in showcasing the cultural significance of street food within various communities present significant challenges for a tourist-focused food magazine landing page.\n\nTourists often struggle to find authentic street food experiences in new locations due to the absence of effective websites focused on food, outdated information, and a failure to convey the rich cultural tapestry of street food culture. These challenges hinder tourists' ability to fully immerse themselves in the culinary experiences of different communities and result in missed opportunities for meaningful culinary exploration.",
            },
            images: {
                1: {
                    image: "/images/jwacery1/strt.webp",
                    hash: "LBN-ZZ-o.lENNGofxuR*KdIpIA%1",
                    details: "Image of street food"
                }
            }
        },
        challenges: {
            title: "Finding food related community content outside of social media was hard.",
            details: "So much importance and priority was put into finding hotels, travel destinations, and flights. But, less attention was paid to finding the right food content. This lack of focus on food content meant that many travelers were left feeling disappointed and eager to find better food options to ensure they had an enjoyable experience.",
            painpoints: {
                1: "Users struggled to find information about street food in new locations, hindering their ability to explore and experience local culinary delights.",
                2: "Existing websites lacked personalized food content. Content were usually either outdated or never carrying the right information. The pages also lacked visual appeal and would fail to capture the attention of visitors.",
                3: "Establishing a connection between street food and the communities where it's found posed a challenge, as users were not able to easily access relevant content highlighting this aspect.",
            }
        },
        understand: {
            constraints: {
                title: "But first, I needed to understand if this was a good problem to tackle.",
                complaints: {
                    1: "Cooking Enthusiasts had a need for the idea.",
                    2: "Foodies wanted to see new cuisines to explore on their next trip.",
                    3: "Health-consious tourists prioritized convenience and authenticity when seeking street food.",
                }
            },
            hmws: {
                title: "So I started to ask questions:",
                complaints: {
                    1: "How might we design a user-friendly website that allows Cooking Enthusiasts to find new recipes, cuisine types and cooking methods?",
                    2: "How might we design an immersive food community interface that inspires Foodies and ignites their culinary curiosity?",
                    3: "How might we help Health-consious Tourists to satisfy their street food cravings without feeling unhealthy?",
                }
            }
        },
        competition: {
            title: "I went on to study other online magazines to better understand their design trends and most importantly, the user expectations.",
            competitors: {
                "Trip Advisor": {
                    screenshot: "/images/jwacery1/tripadvisor.webp",
                    hash: "L3I;}D-V00%#iKVt%zX400N@_NH@",
                },
                "America's Test Kitchen": {
                    screenshot: "/images/jwacery1/americastestkitchen.webp",
                    hash: "LAJvEo-p0BM|?bRjM{of03Rk~8s:",
                },
                "The Guardian": {
                    screenshot: "/images/jwacery1/guardian-1.webp",
                    hash: "L3I;}D-V00%#iKVt%zX400N@_NH@",
                },
                "CBS News": {
                    screenshot: "/images/jwacery1/cbs.webp",
                    hash: "LAJvEo-p0BM|?bRjM{of03Rk~8s:",
                }
            }
        },
        sitemap: {
            1: {
                title: "A common theme with all of them was their play with magazine-styled layouts with important information appearing above. This really cleared out the site structure and made things easy going forward.",
                images: {
                    1: {
                        image: "/images/jwacery1/imm.webp",
                        hash: "LBN-ZZ-o.lENNGofxuR*KdIpIA%1",
                        details: "Image of street food"
                    }
                }
            },
        },
        user_base: {
            title: "Knowing what layout worked was most important.",
            details: "It was important to keep the links and the layout simple and unclusteredas seen on \"America's Test Kitchen\". This was to ensure that users would see what they wanted easily and quicky without having to think too much about where a link or element was located.\n\nUltimately, a challenge was deciding which link was important and which link wasn't. But by going through the data of most clicked links on Magazine websites, it was easy to maintain the link for 3 categories of viewers:",
            userList: {
                1: "The Job Seeker - Has a flaire for working on a team that serves users good products.",
                2: "The Investor - Studies the company, finding details about the business to know more and see possible investment options.",
                3: "The Food Enthusiast - Comes on the website to see information and tips about food.",
            }
        },
        sketches: {
            title: "Usually, my first set of sketches are crucial in establishing the tone and style of the layout. And this did just that by helping me gain a better understanding of the desired aesthetic.",
            image: {
                img01: {
                    sketch: "/images/jwacery1/food-stories.webp",
                    hash: "L3A,]{RQ0Lt7~pWCRjof00W:-:oL",
                    sub: "Food stories section"
                },
                img02: {
                    sketch: "/images/jwacery1/community.webp",
                    hash: "L3A,]{RQ0Lt7~pWCRjof00W:-:oL",
                    sub: "Join community section"
                },
                img03: {
                    sketch: "/images/jwacery1/recipes.webp",
                    hash: "L3A,]{RQ0Lt7~pWCRjof00W:-:oL",
                    sub: "Recipes section"
                },
                img04: {
                    sketch: "/images/jwacery1/Hero.webp",
                    hash: "L3A,]{RQ0Lt7~pWCRjof00W:-:oL",
                    sub: "Hero section"
                },
                img05: {
                    sketch: "/images/jwacery1/subscribe.webp",
                    hash: "L3A,]{RQ0Lt7~pWCRjof00W:-:oL",
                    sub: "Subscribe to newsletter section"
                }
            }
        },
        branding: {
            title: "When it comes to branding, keeping things in line with what users already know, is the best way to go.",
            describe: "However, these alone dont make the design. I had to work on a brand tone that matche the values by selecing colors, typography and images which told the right story and sparked the right emotions.",
            colors: {
                base: "FEFEFE",
                primary: "02DC32",
                secondary: "006616",
                tertiary: "010C03",
            },
            typography: {
                image: "/images/jwacery1/typography.webp",
                hash: "L342y8?wIAD%-=xuRjRj8^ITxuxv",
            }
        },
        components: {
            images: {
                1: {
                    image: "/images/jwacery1/comp.webp",
                    hash: "L9SigSMd~Ux^R-NGkCj[t-b_M|iw",
                },
                2: {
                    image: "/images/jwacery1/log.webp",
                    hash: "L3S~x6RS_2tS_3xaWBM|%NRkD*sp",
                }
            }
        },
        final_wireframes: {
            title: "Putting all of this together, it was easier to create an interface that was both visually appealing and focused on streamlining the unnecessary parts of the flow.",
            images: {
                1: {
                    title: "Page sections",
                    img: {
                        1: {
                            image: "/images/jwacery1/hero-des.webp",
                            hash: "LcPs|-RPxtW;tQt7R,jY~ptRR+s:",
                            sub: "Hero section"
                        },
                        2: {
                            image: "/images/jwacery1/recipes-des.webp",
                            hash: "LcPs|-RPxtW;tQt7R,jY~ptRR+s:",
                            sub: "Recipes section"
                        },
                        3: {
                            image: "/images/jwacery1/culture.webp",
                            hash: "LcPs|-RPxtW;tQt7R,jY~ptRR+s:",
                            sub: "Food community section"
                        },
                        4: {
                            image: "/images/jwacery1/footer.webp",
                            hash: "LcPs|-RPxtW;tQt7R,jY~ptRR+s:",
                            sub: "Footer"
                        },
                        5: {
                            image: "/images/jwacery1/streetf00d.webp",
                            hash: "LcPs|-RPxtW;tQt7R,jY~ptRR+s:",
                            sub: "Food stories section"
                        },
                        6: {
                            image: "/images/jwacery1/must-know.webp",
                            hash: "LcPs|-RPxtW;tQt7R,jY~ptRR+s:",
                            sub: "Must know facts"
                        },
                        7: {
                            image: "/images/jwacery1/newsletter.webp",
                            hash: "LcPs|-RPxtW;tQt7R,jY~ptRR+s:",
                            sub: "Newsletter section"
                        }
                    }
                },
                2: {
                    title: "Pages",
                    img: {
                        1: {
                            image: "/images/jwacery1/home.webp",
                            hash: "LcPs|-RPxtW;tQt7R,jY~ptRR+s:",
                            sub: "Article Page"
                        },
                        2: {
                            image: "/images/jwacery1/article.webp",
                            hash: "LcPs|-RPxtW;tQt7R,jY~ptRR+s:",
                            sub: "Home Page"
                        },
                    }
                }
            }
        },
        final_tests: {
            title: "Tesing Analytics & Impacts.",
            describe: "While some test participants loved the design, others had mixed feelings about it. It was however, interesting to see that they valued the bright green combination that provided a sense of excitement with black that gave a sense of mystery.\n\nParticipants also expressed how this would be useful if they were travelling to a location, as they could easily read up on the location and find recipes and street food to try out in that location.",
            list: {
                1: "The visual appeal of this design is incredible! The vibrant imagery and intuitive layout is an absolute delight.",
                2: "I like a lot of information when reading my magazines. But this one seems to have few information about the important stuff.",
                3: "It seems like this is focused on popular tourist destinations, neglecting lesser-known street food gems.",
                4: "This would be my go-to resource for planning food-focused travel itineraries.",
                5: "As someone who loves to explore different cuisines while travelling, the design is simply stunning. I love how intuitive it is!",
            },
            img: {
                image: "/images/jwacery1/conversions-gif.gif",
                hash: "L6RDK4M,M}tjjfX6oet3}8TFR-Vv",
            }
        },
        conclusion: {
            title: "Mission accomplished?",
            describe: "I think there is still a bit of work to be done, especially as this was just the landing pages. It would be interesting to see what the ther pages would look like, and consequently how users would respond to it.\n\nOne of the challenges that I encountered was the decision to make the website look luxurious without taking out the street value or vibe. This meant that certain types of images could not be used with the design. They all had to be colorful in a way that fitted into the storytelling.\n\nHowbeit, with more research, it was easier to approach these challenges. It would be interesting to see which company takes this on as a project to design a personalized food blog for getaway tourists. We see a lot of \"book your trip\", \"hotel\", and \"flight booking\" services and it would be nice to see more of food-based service platforms for travellers.",
        }
    },

];

export default ProjectsList;
