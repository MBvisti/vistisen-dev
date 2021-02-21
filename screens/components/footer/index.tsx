import React from 'react';
import { LinkedinSquare } from '@styled-icons/boxicons-logos/LinkedinSquare';
import { Github } from '@styled-icons/boxicons-logos/Github';
import styled from 'styled-components';

const AnchorElement = styled.a`
    color: ${({ theme }) => theme.primary};
    font-weight: 500;
    cursor: pointer;
    font-size: 1.2rem;
`;

const Socials = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: ${({ theme }) => theme.primary};
    max-height: 100%;

    svg {
        cursor: pointer;
        height: 2rem;
        width: 2rem;
        color: ${({ theme }) => theme.primary};
        margin: 0 0.6rem 0 0.6rem;
    }
`;

const Footer = () => (
    <Socials className='h-10'>
        <AnchorElement href={'https://www.linkedin.com/in/mbvisti-dev/'}>
            <LinkedinSquare />
        </AnchorElement>
        <AnchorElement href={'https://github.com/mbvisti'}>
            <Github />
        </AnchorElement>
    </Socials>
);

export default Footer;
