import React, {Fragment} from 'react';
import styled from 'styled-components'
import {Docker, ReactLogo} from "@styled-icons/fa-brands";
import {Javascript, Postgresql, Typescript} from "@styled-icons/simple-icons";

const IntroductionContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    
    button:hover {
        background: ${props => props.theme.primary};
        border: 1px solid ${props => props.theme.accentTwo};
        color: ${props => props.theme.bg};
    }
`;

const Introduction = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
`;

const HeaderOne = styled.h1`
    font-weight: 500;        
    color: ${props => props.theme.primary};
    font-size: 4rem;
`;

const HeaderTwo = styled.h2`
    font-weight: 200;
    color: ${props => props.theme.primary};
    font-size: 3rem;
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
        color: ${props => props.theme.secondary};
    }
    
    svg:hover {
        fill: ${props => props.theme.primary};
    }  
    
`;

const Button = styled.button`
    margin-top: 3.5rem;
    width: 8rem;
    height: 3.5rem;
    background: ${props => props.theme.bg};
    border: 1px solid ${props => props.theme.secondary};
    border-radius: 0.4rem;
    font-family: 'Roboto', sans-serif;
    color: ${props => props.theme.primary};
    cursor: pointer;     
`;

export default function Home() {
    return (
        <Fragment>
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
                <Button>Say hello</Button>
            </IntroductionContainer>
        </Fragment>
    )
}
