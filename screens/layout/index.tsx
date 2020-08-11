import React from "react";
import styled from 'styled-components';
import Meta from "../components/meta/";

const Container = styled.div`
    display: grid;
    max-width: 100vw;
    width: 100vw;
    max-height: 100vh;
    height: 100vh;    
    background-color: ${props => props.theme.bg};
    
    grid-template-columns:  1fr;
    grid-template-rows: 10% 1fr 10%;
          
    @media (min-width: 640px) {

    }
    
    @media (min-width: 768px) {
    
    }
    
    @media (min-width: 1024px) {
    
    }
    
    @media (min-width: 1280px) {
    
    }
`;

export const Layout = (props: { children: React.ReactNode; }) => {
    return (
        <Container>
            <Meta />
            {props.children}
        </Container>
    )
};