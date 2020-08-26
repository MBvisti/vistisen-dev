import React from 'react';
import styled from 'styled-components'
import {TitleMedium, TitleSmall} from "../components/headings";

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
    margin-top: 4rem;
    flex: 1;
    display: flex;
    flex-direction: column;
        
    overflow-y: scroll;    
`;

export const Experience = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 2rem;
    cursor: pointer;
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
    return (
        <Container>
            <TitleContainer>
                <TitleMedium>
                    Work
                </TitleMedium>
                <p>
                    Below is a list of my work experiences. This includes everything from previous jobs, freelance work and side projects.
                </p>
            </TitleContainer>
            <ExperienceContainer>
                <Experience>
                    <ImageContainer>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1004px-Google_%22G%22_Logo.svg.png" alt="google logo" />
                    </ImageContainer>
                    <ShortDescContainer>
                        <TitleSmall marginTop={0}>
                            Legal Monster ApS
                        </TitleSmall>
                        <p>
                            1/09/2019 to 1/10/2020
                        </p>
                        <p>
                            Full-Stack developer
                        </p>
                        <p>
                            Ruby on Rails - Typescript - React
                        </p>
                    </ShortDescContainer>
                </Experience>
                <Experience>
                    <ImageContainer>
                        <img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/227_Netflix_logo-512.png" alt="netflix logo" />
                    </ImageContainer>
                    <ShortDescContainer>
                        <TitleSmall marginTop={0}>
                            HS Moeller ApS
                        </TitleSmall>
                        <p>
                            1/09/2019 to 1/10/2020
                        </p>
                        <p>
                            It consultant
                        </p>
                        <p>
                            React - Styled components - Figma
                        </p>
                    </ShortDescContainer>
                </Experience>
                <Experience>
                    <ShortDescContainer>
                        <TitleSmall marginTop={0}>
                            Easy Skat ApS
                        </TitleSmall>
                        <p>
                            1/09/2019 to 1/10/2020
                        </p>
                        <p>
                            Full-Stack developer
                        </p>
                        <p>
                            React - Styled components - Figma
                        </p>
                    </ShortDescContainer>
                </Experience>
            </ExperienceContainer>
        </Container>
    )
}
