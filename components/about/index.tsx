import React from 'react';
import Link from 'next/link';

// TODO: this should be really simply and concise. Who I am, my preferred technology, what I want to do and what I have done work and education.
export const About = () => {
    return (
        <div className='flex flex-col py-6 md:my-auto xl:mx-auto xl:w-1/4'>
            <h2 className="pb-2 font-bold text-xl md:text-2xl">About me</h2>
            <div className='flex flex-col md:flex-row xl:flex-col'>
                <div className="leading-6 mb-4 md:mb-0 md:mr-6 xl:mr-0 xl:mb-4">
                    <p>
                        I'm a self-taught developer originally from Copenhagen -
                        Denmark. I currently living in Berlin, Germany where I
                        work as a contractor/freelance developer. My educational
                        background is in business where I have a masters in
                        Finance & International business, but developed a
                        passion for programming on the side.
                    </p>
                </div>
                <div className="leading-6 md:ml-6 xl:ml-0">
                    <p>
                        I like to build cloud native applications and mainly use
                        JS/TS, React, Golang and Docker. I'm a big proponent of
                        using test driven development, whenever it makes sense.
                        I do have devOps experience, mostly with CircleCI,
                        Heroku and Digital Ocean. If you have any questions,
                        please feel free to send me a{' '}
                        <Link href="/contact">
                            <span className='underline font-bold cursor-pointer'>mail</span>
                        </Link>.
                    </p>
                </div>
            </div>
        </div>
    );
};
