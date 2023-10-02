import React from 'react';

import Lists from '../components/Lists';

export default function Pricing() {

    return (
        <>
            <header className="landing w-full flex flex-col items-center">
                <div className="head w-full">
                    <div className="head-text flex flex-col items-center justify-center">
                        <div className="head-text-top">
                            <h1 className="h1">
                                Pricing Guide
                            </h1>
                        </div>
                    </div>
                </div>
            </header>
            <section className="main w-full flex flex-col items-center">
                <article className="process-container w-full flex flex-col items-start">
                    <Lists type={"pricing"} linkText={"none"} link={""} />
                </article>
            </section>
        </>
    )
}