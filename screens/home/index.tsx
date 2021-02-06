import React from 'react';
import styled from 'styled-components';
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

const Introduction = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    padding-right: 5rem;

    @media (min-width: 414px) {
        padding-right: 8rem;
    }

    @media (min-width: 640px) {
        padding-right: 0;
    }
`;

const HeaderOne = styled.h1`
    font-weight: 700;
    color: ${(props) => props.theme.primary};
    font-size: 3rem;

    @media (min-width: 1024px) {
        font-size: 3.7rem;
    }
`;

const HeaderTwo = styled.h2`
    font-weight: 200;
    color: ${(props) => props.theme.primary};
    font-size: 3rem;

    @media (min-width: 1024px) {
        font-size: 3.1rem;
    }
`;

interface ButtonProps {
    readonly inverse?: boolean;
}

const Button = styled.button<ButtonProps>`
    margin-top: 1.5rem;
    width: 9rem;
    height: 4.5rem;
    background: ${(props) =>
        props.inverse ? props.theme.bg : props.theme.secondary};
    border: 1px solid ${(props) => props.theme.secondary};
    border-radius: 0.4rem;
    font-family: 'Roboto', sans-serif;
    cursor: pointer;

    color: ${(props) =>
        props.inverse ? props.theme.secondary : props.theme.bg};
    font-size: 1.6rem;
    font-size: bold;

    @media (min-width: 1024px) {
        width: 11rem;
        height: 4.5rem;
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 85%;

    @media (min-width: 375px) {
        width: 65%;
    }

    @media (min-width: 640px) {
        width: 45%;
    }
`;

export const Home = () => {

    return (
        <IntroductionContainer>
            <Introduction>
                <HeaderTwo>Hi, I'm Morten.</HeaderTwo>
                <HeaderOne>A freelance full-stack developer</HeaderOne>
                <HeaderTwo>building cloud-native applications.</HeaderTwo>
            </Introduction>
            <ButtonContainer>
                <Link href="/contact">
                    <Button>Say hello</Button>
                </Link>
                <Link href="/work">
                    <Button inverse={true}>My Work</Button>
                </Link>
            </ButtonContainer>
            <img
                src="https://res.cloudinary.com/diwu3yx6a/image/upload/v1598441374/mig_selv-removebg-preview.png"
                alt="maaaaaaaaaarden"
            />
        </IntroductionContainer>
    );
};