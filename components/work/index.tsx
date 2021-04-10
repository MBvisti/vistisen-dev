import React from "react";
import Link from "next/link";

interface Exp {
  experiences: Array<{
    slug: string,
    title: string,
    position: string,
    date: Date,
  }>
}

const expData: Exp = {
  experiences: [
    {
      slug: '/work/everphone',
      title: 'Everphone Gmbh',
      position: 'Full-Stack engineer',
      date: new Date('February, 2021'),
    },
    {
      slug: '/work/legal-monster',
      title: 'Legal Monster Aps',
      position: 'Full-Stack developer',
      date: new Date('September, 2019'),
    },
    {
      slug: '/work/legal-monster',
      title: 'HS Moeller ApS',
      position: 'Frontend developer',
      date: new Date('April, 2018'),
    }
  ]
};

export const Work = () => {
  return (
    <div className='py-6 flex flex-col flex-1 md:mx-56 md:py-64 lg:items-center lg:justify-center'>
      <div className='flex flex-col justify-center mb-4 lg:w-1/3'>
        <h2 className='mb-2 text-xl font-bold md:text-3xl'>Work</h2>
        <p className='text-lg md:text-xl'>Here is a list of my previous work experience.</p>
      </div>
      <div className='flex flex-col overflow-y-auto flex-initial lg:w-1/3'>
        {expData.experiences.map(experience => {
          return (
            <Link href="/work/[slug]" as={`${experience.slug}`}>
              <div
                className='border border-gray-400 flex flex-col mb-8 rounded-md p-4 h-24 w-11/12 cursor-pointer justify-around shadow group hover:bg-black'
              >
                <p className='mb-2 group-hover:text-white'>{experience.title}</p>
                <h2 className='text-xl font-medium group-hover:text-white'>{experience.position}</h2>
              </div>
            </Link>
          )
        })}                
      </div>
    </div>
  );
};
