import React from "react";
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
       
    h2 {
        margin-top: 30%;
        color: ${props => props.theme.primary};
        font-size: 2.1rem;
    }  
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2.5rem;
    line-height: 1.3;
    
    p {
        text-align: justify;
        font-weight: 300;
        color: ${props => props.theme.primary};
        margin-bottom: 1rem;
    }
`

// TODO: this should be really simply and concise. Who I am, my preferred technology, what I want to do and what I have done work and education.
export const About = () => {
    return (
        <Container>
            <h2>
                About me
            </h2>
            <TextContainer>
                <p>
                    Originally from Denmark, I'm currently living in Berlin, Germany working as a freelance full-stack developer. I have
                </p>
                <p>
                    My educational background is in business where I have a master in finance and international
                    business.
                </p>
                <p>
                    I mainly work with Javascript/Typescript, React, Golang and PostgreSQL. However, I do also have working
                    experience with Ruby on Rails, Node.js and Python.
                </p>
                <p>
                    I'm open to work on a freelance or contracting basis.
                </p>
            </TextContainer>
        </Container>
    )
}