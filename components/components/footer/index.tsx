import React from 'react';
import Link from 'next/link';
import { LinkedinSquare } from '@styled-icons/boxicons-logos/LinkedinSquare';
import { Github } from '@styled-icons/boxicons-logos/Github';
import styled from 'styled-components';

const LinkedInIcon = styled(LinkedinSquare)``;
const GitHubIcon = styled(Github)``;

const Footer = () => (
    <div className='h-2 flex items-center justify-end'>
        <Link href={'https://www.linkedin.com/in/mbvisti-dev/'}>
            <LinkedInIcon className='w-6 h-6 cursor-pointer' />
        </Link>
        <Link href={'https://github.com/mbvisti'}>
            <GitHubIcon className='ml-2 w-6 h-6 cursor-pointer' />
        </Link>
    </div>
);

export default Footer;
