import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const IntroductionContainer = styled.div`
    button:hover {
        background: ${(props) => props.theme.primary};
        border: 1px solid ${(props) => props.theme.secondary};

        color: ${(props) => props.theme.accentTwo};
    }

    @media (min-width: 640px) {
        margin: 0 auto;
        position: relative;
        img {
            display: inline-block;
            visibility: visible;
            position: fixed;
            bottom: 0;
            left: -10rem;

            width: 40rem;
        }
    }
`;

const Introduction = styled.div``;

const HeaderOne = styled.h1` 
    color: ${(props) => props.theme.primary};
`;

const HeaderTwo = styled.h2`
    color: ${(props) => props.theme.primary};
`;

interface ButtonProps {
    readonly inverse?: boolean;
}

const Button = styled.button<ButtonProps>`
    background: ${(props) =>
        props.inverse ? props.theme.bg : props.theme.secondary};
    border: 1px solid ${(props) => props.theme.secondary};
    color: ${(props) =>
        props.inverse ? props.theme.secondary : props.theme.bg};
`;

const ButtonContainer = styled.div``;

export const Home = () => {
    return (
        <IntroductionContainer className='flex flex-col justify-center'>
            <Introduction className='flex flex-col mb-4'>
                <HeaderTwo className='font-extralight text-5xl'>Hi, I'm Morten.</HeaderTwo>
                <HeaderOne className='font-bold text-5xl my-2'>A full-stack engineer</HeaderOne>
                <HeaderTwo className='font-extralight text-5xl'>building cloud-native applications.</HeaderTwo>
            </Introduction>
            <ButtonContainer className='flex justify-between w-4/5 sm:w-3/6'>
                <Link href="/contact">
                    <Button className='mt-6 w-36 h-16 rounded text-2xl font-medium'>Say hello</Button>
                </Link>
                <Link href="/work">
                    <Button className='mt-6 w-36 h-16 rounded text-2xl font-normal' inverse={true}>My Work</Button>
                </Link>
            </ButtonContainer>
            <img
                className='hidden'        
                src="https://res.cloudinary.com/diwu3yx6a/image/upload/v1598441374/mig_selv-removebg-preview.png"
                alt="maaaaaaaaaarden"
            />
        </IntroductionContainer>
    );
};
