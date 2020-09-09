import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 5rem;
    max-width: 100%;
    overflow: hidden;

    h2 {
        color: ${(props) => props.theme.primary};
        font-size: 2.1rem;
        margin-bottom: 1.1rem;
    }

    @media (min-width: 640px) {
        margin: 0 10%;
        justify-content: center;
    }

    @media (min-width: 1024px) {
        margin: 0 17rem;
    }

    @media (min-width: 1025px) {
        margin: 0 25rem;
    }
`;

const TextContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    max-width: 100%;

    @media (min-width: 640px) {
        flex-direction: row;

        div:nth-child(1n) {
            margin-right: 2.4rem;
        }
    }

    @media (min-width: 1024px) {
        flex-direction: row;

        justify-content: center;
    }

    @media (min-width: 1025px) {
        flex-direction: row;

        justify-content: center;
    }
`;

const TextSection = styled.div`
    width: 100%;
    line-height: 1.4;
    margin-bottom: 1rem;

    p {
        font-weight: 300;
        font-size: 1.5rem;
        color: ${(props) => props.theme.primary};
    }
`;

// TODO: this should be really simply and concise. Who I am, my preferred technology, what I want to do and what I have done work and education.
export const About = () => {
    return (
        <Container>
            <h2>About me</h2>
            <TextContainer>
                <TextSection>
                    <p>
                        I'm a self-taught developer originally from Copenhagen -
                        Denmark. I currently living in Berlin, Germany where I
                        work as a contractor/freelance developer. My educational
                        background is in business where I have a masters in
                        Finance & International business, but developed a
                        passion for programming on the side.
                    </p>
                </TextSection>
                <TextSection>
                    <p>
                        I like to build cloud native applications and mainly use
                        JS/TS, React, Golang and Docker. I'm a big proponent of
                        using test driven development, whenever it makes sense.
                        I do have devOps experience, mostly with CircleCI,
                        Heroku and Digital Ocean. If you have any questions,
                        please feel free to send me a{' '}
                        <Link href="/contact">mail</Link>.
                    </p>
                </TextSection>
            </TextContainer>
        </Container>
    );
};
