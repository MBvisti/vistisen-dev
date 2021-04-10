import React from 'react';
import Link from 'next/link';

// TODO: this should be really simply and concise. Who I am, my preferred technology, what I want to do and what I have done work and education.
export const About = () => {
    return (
        <div className='py-40 flex flex-col flex-1 items-center md:mx-56 md:justify-center'>
            <h2 className="mb-2 text-xl font-bold md:text-3xl">About me</h2>
            <div className='flex flex-col lg:w-2/4 xl:w-1/3'>
                <div className="leading-6 mb-4">
                    <p className='text-lg text-justify md:text-xl'>
                        I'm a self-taught developer originally from Copenhagen -
                        Denmark. I currently living in Berlin, Germany where I
                        work as a contractor/freelance developer. My educational
                        background is in business where I have a masters in
                        Finance & International business, but developed a
                        passion for programming on the side.
                    </p>
                </div>
                <div className="leading-6">
                    <p className='text-lg text-justify md:text-xl'>
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
