import React from 'react';

import Lists from '../components/Lists';

export default function Contact() {

    return (
        <>
            <header className="landing w-full flex flex-col items-center">
                <div className="head w-full">
                    <div className="head-text flex flex-col items-center justify-center">
                        <div className="head-text-top">
                            <h1 className="h1">
                                Get in touch
                            </h1>
                            {/* <p className="p1 text-left">
                                You can contact me here if you are interested in working with me; please include a brief description of what you plan to accomplish. I look forward to hearing your thoughts and working with you to achieve a successful outcome for your project.
                            </p> */}
                        </div>
                    </div>
                </div>
            </header>
            <section className="main w-full flex flex-col items-center">
                <article className="process-container w-full flex flex-row justify-between items-start">
                    <Lists type={"contact"} linkText={"none"} link={""} />
                </article>
            </section>
        </ >
    )
}