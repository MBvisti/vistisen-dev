import React, {useState} from 'react';
import styled from 'styled-components'
import {TitleMedium} from "../components/headings";
import {ArrowIosForwardOutline} from "@styled-icons/evaicons-outline/ArrowIosForwardOutline/ArrowIosForwardOutline";
import Link from "next/link";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    padding-top: 5rem;
    
    
    h2 {
        margin-bottom: 0.7rem;
    }
    
    p {
        color: ${props => props.theme.primary };
        font-size: 1.2rem;
        font-weight: 300;
    }
    
    @media (min-width: 640px) {
        margin: auto 20%;   
    }
    
    @media (min-width: 1024px) {
        margin: 0 15%;   
        flex-direction: row;
        justify-content: space-between;
        padding-top: 10rem; 
    } 
`;

export const ExperienceContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    
    overflow-y: scroll;    
`;

export const Experience = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 90%;
    margin-bottom: 2rem;
    cursor: pointer;
    background: ${props => props.theme.secondary};
    border-radius: 0.4rem;
    padding: 1rem;
    height: 10rem;
    justify-content: flex-end;
    
    h2, p {
        color: ${props => props.theme.accentTwo};
    }
    
    p {
        font-size: 1.35rem;
        font-weight: 500;
    } 
    
    svg {
        position: absolute;
        color: ${props => props.theme.accentTwo};
        width: 3rem;
        height: 3rem;
        right: 1rem;
        top: 3.5rem;
    }
`;

export const ImageContainer = styled.div`
    flex: 0 1 25%;
    margin-right: 1rem;
    display: flex;    
    align-items: flex-start;
    justify-content: flex-start;
    height: 100%;

    img {
        max-width: 70%;
        max-height: 70%;
    }
`;

export const ShortDescContainer = styled.div`
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 1rem 1rem 0;              
        
    p {
        color: ${props => props.theme.primary };
        font-size: 1.25rem;
        font-weight: 300;
        margin-top: 0.3rem;
        margin-bottom: 0.1rem;
    }
       
`;

export const Description = styled.div`
    text-overflow: ellipsis;
    overflow: hidden;
    // white-space: nowrap;
    color: white;
    max-width: 20rem;
`;

const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    
    @media (min-width: 1024px) {
        flex: 0 1 35%;
        margin-right: 5rem;
        
        h2 {
          font-size: 2.4rem;
        }
        
        p {
          font-size: 1.563rem;
          line-height: 1.3;
        }
    } 
    
`;

export const Work = () => {
    const [state, setState] = useState({
        hoveredElement: 0,
    });
    return (
        <Container>
            <TitleContainer>
                <TitleMedium>
                    Work
                </TitleMedium>
                <p>
                    Here is a list of my previous work experience.
                </p>
            </TitleContainer>
            <ExperienceContainer>
                <Link href="/work/[slug]" as="/work/legal-monster">
                    <Experience onMouseEnter={() => setState({...state, hoveredElement: 1})} onMouseLeave={() => setState({...state, hoveredElement: 0})}>
                        <p>
                            Full-Stack developer
                        </p>
                        <TitleMedium>
                            Legal Monster Aps
                        </TitleMedium>
                        {state.hoveredElement === 1 && <ArrowIosForwardOutline />}
                    </Experience>
                </Link>
                <Link href="/work/[slug]" as="/work/hs-moeller">
                    <Experience onMouseEnter={() => setState({...state, hoveredElement: 2})} onMouseLeave={() => setState({...state, hoveredElement: 0})}>
                        <p>
                            IT consultant
                        </p>
                        <TitleMedium>
                            HS Moeller ApS
                        </TitleMedium>
                        {state.hoveredElement === 2 && <ArrowIosForwardOutline />}
                    </Experience>
                </Link>
                <Link href="/work/[slug]" as="/work/easy-skat">
                    <Experience onMouseEnter={() => setState({...state, hoveredElement: 3})} onMouseLeave={() => setState({...state, hoveredElement: 0})}>
                        <p>
                            Front-end developer
                        </p>
                        <TitleMedium>
                            Easy Skat ApS
                        </TitleMedium>
                        {state.hoveredElement === 3 && <ArrowIosForwardOutline />}
                    </Experience>
                </Link>
            </ExperienceContainer>
        </Container>
    )
}
