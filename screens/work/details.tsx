import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { TitleBig, TitleMedium } from '../components/headings';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    padding-top: 2rem;

    overflow-y: scroll;

    @media (min-width: 640px) {
        margin: auto 20%;
    }

    @media (min-width: 1024px) {
        margin: auto 30%;
    }
`;

const HeaderInfo = styled.div`
    display: flex;
    flex-direction: column;

    h2 {
        color: ${(props) => props.theme.secondary};
    }

    p {
        font-size: 1.563rem;
        font-weight: 400;
    }

    p:last-child {
        margin-top: 0.7rem;
    }
`;

const RoleInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2rem;

    p {
        margin-bottom: 0.5rem;
        font-weight: 400;
        font-size: 1.543rem;
    }
`;

const Bio = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 3rem;

    p {
        margin-bottom: 0.5rem;
        font-weight: 400;
        font-size: 1.543rem;
    }

    p:first-child {
        text-decoration: underline;
    }
`;

const Summary = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 4rem;

    p {
        margin-bottom: 0.5rem;
        font-weight: 400;
        font-size: 1.543rem;
    }

    p:first-child {
        text-decoration: underline;
    }
`;

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
        period: 'Jun 2018 to May 2019',
        role: 'Front-developer developer & Consultant',
        bio:
            'Introduced and re-wrote a number of websites in React for KPMG Acor Tax while advising on design and UX. Worked closely with external designers to bring clients ideas to live.',
        industry: 'Software consultancy',
        techStack: 'React, Figma',
    },
    easySkat: {
        companyName: 'Easy skat ApS',
        period: 'Apr 2018 to Jun 2018',
        role: 'Front-developer intern',
        bio:
            'Assisted the company in building a CMR site for KPMG Acor Tax, focused on information about the automotive industry.',
        industry: 'Accounting',
        techStack: 'React',
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
        case 'easy-skat':
            companyData = data['easySkat'];
        default:
            break;
    }

    return (
        <Container>
            <HeaderInfo>
                <p>Company</p>
                <TitleBig>{companyData.companyName}</TitleBig>
                <p>{companyData.period}</p>
            </HeaderInfo>
            <RoleInfo>
                <p>Role</p>
                <TitleMedium>{companyData.role}</TitleMedium>
            </RoleInfo>
            <Bio>
                <p>Bio</p>
                <p>{companyData.bio}</p>
            </Bio>
            <Summary>
                <p>Summary</p>
                <p>The industry: {companyData.industry}.</p>
                <p>The tech stack: {companyData.techStack}.</p>
                <p>The role: {companyData.role}.</p>
            </Summary>
        </Container>
    );
};
