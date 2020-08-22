import React, {useState} from "react";
import styled from 'styled-components';

interface StyleProps {
    readonly selected: boolean;
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    
    h2 {
        margin-top: 5rem;
        color: ${props => props.theme.primary};
        font-size: 2.1rem;
    }  
`;

const OptionsContainer = styled.div`
    display: flex;
    margin-top: 1rem;
    cursor: pointer;    
`

const Option = styled.p<StyleProps>`
    color: ${props => props.selected ? props.theme.secondary : props.theme.primary};
    font-size: 1.2rem;
    font-weight: 300;
    margin-right: 2rem;
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2.5rem;
    height: 100%;
    line-height: 1.4;
    
    p {
        text-align: justify;
        font-weight: 300;
        color: ${props => props.theme.primary};
        margin-bottom: 1rem;
    }
`
const ResumeContainer = styled.div`
    margin-top: 2.5rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    color: ${props => props.theme.primary};
`;

export const About = () => {
    const [state, setState] = useState("me")
    return (
        <Container>
            <h2>
                About
            </h2>
            <OptionsContainer>
                <Option selected={state === "me" ? true : false} onClick={() => setState('me')}>Me</Option>
                <Option selected={state === "resume" ? true : false} onClick={() => setState('resume')}>Resume</Option>
            </OptionsContainer>
            {
                state === 'me' ?
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
                    :
                <ResumeContainer>
                    <p>MAAAARDEN's Resume</p>
                </ResumeContainer>
            }
        </Container>
    )
}