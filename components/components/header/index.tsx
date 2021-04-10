import React, { useState } from 'react';
import styled from 'styled-components';
import { ThreeBars } from '@styled-icons/octicons/ThreeBars';
import { CloseCircle } from '@styled-icons/ionicons-outline/CloseCircle';
import Link from 'next/link';

interface StyleProps {
    readonly fontWeight: number;
}

const ThreeBarIcon = styled(ThreeBars)`
    @media (min-width: 640px) {
        display: none;
    }
`;

const CloseIcon = styled(CloseCircle)`
    color: ${(props) => props.theme.accentTwo};
`;

const Header = () => {
    const [state, setState] = useState(false);

    return (
        <div className='flex justify-between items-center relative'>
            <div className='flex flex-col cursor-pointer'>
                <Link href="/">
                    <span className='text-lg font-bold md:text-xl'>vis-ti-sen</span>
                </Link>
            </div>

            <nav>
                {!state && <ThreeBarIcon onClick={() => setState(!state)} className='w-4 h-4 cursor-pointer' />}
                <div className='hidden md:flex md:justify-between'>
                    <Link href="/">
                        <p className='font-bold text-sm mx-4 cursor-pointer md:text-xl'>Home</p>
                    </Link>
                    <Link href="/work">
                        <p className='font-bold text-sm mx-4 cursor-pointer md:text-xl'>Work</p>
                    </Link>
                    <Link href="/blog">
                        <p className='font-bold text-sm mx-4 cursor-pointer md:text-xl'>Blog</p>
                    </Link>
                    <Link href="/contact">
                        <p className='font-bold text-sm mx-4 cursor-pointer md:text-xl'>Contact</p>
                    </Link>
                    <Link href="/about">
                        <p className='font-bold text-sm mx-4 cursor-pointer md:text-xl'>About</p>
                    </Link>
                </div>
            </nav>
            {state && (
                <div className='flex flex-col fixed left-0 bottom-0 top-0 p-10 z-50 bg-black w-full'>
                    <CloseIcon className='w-8 h-8 right-0 absolute mr-8 cursor-pointer' onClick={() => setState(!state)} />
                    <h2 className='text-white font-bold text-2xl mb-6'>Navigation</h2>
                    <div className='flex flex-col'>
                        <Link href="/">
                            <p className='text-white cursor-pointer font-medium text-2xl my-5' onClick={() => setState(false)}>
                                Home
                            </p>
                        </Link>
                        <Link href="/work">
                            <p className='text-white cursor-pointer font-medium text-2xl my-5' onClick={() => setState(false)}>
                                Work
                            </p>
                        </Link>
                        <Link href="/blog">
                            <p className='text-white cursor-pointer font-medium text-2xl my-5' onClick={() => setState(false)}>
                                Blog
                            </p>
                        </Link>                        
                        <Link href="/contact">
                            <p className='text-white cursor-pointer font-medium text-2xl my-5' onClick={() => setState(false)}>
                                Contact
                            </p>
                        </Link>
                        <Link href="/about">
                            <p className='text-white cursor-pointer font-medium text-2xl my-5' onClick={() => setState(false)}>
                                About
                            </p>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;
