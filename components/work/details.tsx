import React from 'react';
import { useRouter } from 'next/router';
interface WorkExperience {
    companyName: string;
    period: string;
    role: string;
    bio: string;
    industry: string;
    techStack: string;
}

interface WorkData {
    [name: string]: WorkExperience;
}

const data: WorkData = {
    legalMonster: {
        companyName: 'Legal Monster ApS',
        period: 'Jan 2019 to Nov 2020',
        role: 'Full-stack developer',
        bio:
            'My main responsibilities in this role was on the frontend which consisted of different widgets built in Preact (minified version of React) with Typescript, that have been viewed over 10 million times. Furthermore, I assisted in developing the API to support the widgets.',
        industry: 'Legal tech',
        techStack: 'Preact, Typescript, Ruby on Rails, Postgresql, Heroku',
    },
    hsMoeller: {
        companyName: 'HS Moeller ApS',
        period: 'Apr 2018 to May 2019',
        role: 'Front-developer developer & Consultant',
        bio:
            'Introduced and re-wrote a number of websites in React for KPMG Acor Tax while advising on design and UX. Worked closely with external designers to bring clients ideas to live.',
        industry: 'Software consultancy',
        techStack: 'React, Figma',
    },
    everphone: {
        companyName: 'Everphone Gmbh',
        period: 'Feb 2021 to current',
        role: 'Full-stack engineer',
        bio:
            'Building customer facing portals while migrating our legacy API from PHP to Golang and graphql',
        industry: 'B2B saas',
        techStack: 'React, Golang, Mysql, Google cloud provider, Terraform',
    },
};

export const WorkDetails = () => {
    const r = useRouter();

    const { slug } = r.query;

    let companyData: WorkExperience = data['legalMonster'];

    switch (slug) {
        case 'legal-monster':
            companyData = data['legalMonster'];
            break;
        case 'hs-moeller':
            companyData = data['hsMoeller'];
        case 'everphone':
            companyData = data['everphone'];
        default:
            break;
    }

    return (
        <div className='flex flex-col overflow-y-auto pt-6 flex-1 md:mx-56 md:py-64 lg:w-96 lg:mx-auto'>
            <div className='flex flex-col'>
                <h3 className='text-2xl font-semibold'>Company</h3>
                <h1 className='text-3xl py-4'>{companyData.companyName}</h1>
                <p className='text-xl font-light'>{companyData.period}</p>
            </div>
            <div className='flex flex-col mt-8'>
                <h3 className='text-2xl mb-2 font-semibold'>Role</h3>
                <h2 className='text-2xl'>{companyData.role}</h2>
            </div>
            <div className='flex flex-col mt-8'>
                <h3 className='text-2xl mb-2 font-semibold'>Bio</h3>
                <p className='text-2xl font-light'>{companyData.bio}</p>
            </div>
            <div className='flex flex-col mt-8'>
                <h3 className='text-2xl mb-2 font-semibold'>Recap</h3>
                <p className='mb-1 text-2xl font-light'>The industry: {companyData.industry}</p>
                <p className='mb-1 text-2xl font-light'>The tech stack: {companyData.techStack}</p>
                <p className='mb-1 text-2xl font-light'>The role: {companyData.role}</p>
            </div>
        </div>
    );
};
