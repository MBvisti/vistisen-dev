import React from 'react';
import styled from 'styled-components';
import { Docker, ReactLogo } from '@styled-icons/fa-brands';
import { Javascript, Postgresql, Typescript } from '@styled-icons/simple-icons';
import Link from 'next/link';

const IntroductionContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;

    img {
        display: none;
    }

    button:hover {
        background: ${(props) => props.theme.primary};
        border: 1px solid ${(props) => props.theme.accentTwo};

        a {
            color: ${(props) => props.theme.accentTwo};
        }
    }

    @media (min-width: 640px) {
        margin: 0 auto;
    }

    @media (min-width: 1024px) {
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

const Introduction = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
`;

const HeaderOne = styled.h1`
    font-weight: 500;
    color: ${(props) => props.theme.primary};
    font-size: 4rem;

    @media (min-width: 1024px) {
        font-size: 6.2rem;
    }
`;

const HeaderTwo = styled.h2`
    font-weight: 200;
    color: ${(props) => props.theme.primary};
    font-size: 3rem;

    @media (min-width: 1024px) {
        font-size: 5.1rem;
    }
`;

const StackIcons = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin-bottom: 3rem;

    svg {
        height: 1.3rem;
        width: 1.3rem;
        cursor: pointer;
        color: ${(props) => props.theme.secondary};
    }

    svg:hover {
        fill: ${(props) => props.theme.primary};
    }

    @media (min-width: 1024px) {
        width: 100%;
        justify-content: space-around;

        svg {
            height: 1.5rem;
            width: 1.5rem;
            cursor: pointer;
            color: ${(props) => props.theme.secondary};
        }
    }
`;

const Button = styled.button`
    margin-top: 1.5rem;
    width: 8rem;
    height: 3.5rem;
    background: ${(props) => props.theme.bg};
    border: 1px solid ${(props) => props.theme.secondary};
    border-radius: 0.4rem;
    font-family: 'Roboto', sans-serif;
    cursor: pointer;

    a {
        color: ${(props) => props.theme.primary};
    }

    @media (min-width: 1024px) {
        width: 11rem;
        height: 4.5rem;
    }
`;

export const Home = () => {
    return (
        <IntroductionContainer>
            <Introduction>
                <HeaderTwo>Hi,</HeaderTwo>
                <HeaderOne>I am Morten.</HeaderOne>
                <HeaderTwo>Full Stack developer</HeaderTwo>
            </Introduction>
            <StackIcons>
                <ReactLogo />
                <Javascript />
                <Typescript />
                <Postgresql />
                <Docker />
            </StackIcons>
            <Button>
                <Link href="/contact">Say hello</Link>
            </Button>
            <img
                src="https://res.cloudinary.com/diwu3yx6a/image/upload/v1598441374/mig_selv-removebg-preview.png"
                alt="maaaaaaaaaarden"
            />
        </IntroductionContainer>
    );
};
