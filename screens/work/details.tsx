import React from 'react';
import styled from 'styled-components'

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

export const WorkDetails = () => {

    return (
        <Container>
           <p>Details</p>
        </Container>
    )
}
