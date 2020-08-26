import React from "react";
import styled from 'styled-components';
import Meta from "../components/meta/";
import Header from "../components/header";
import Footer from "../components/footer";

const Container = styled.div`
    display: grid;
    max-width: 100vw;
    min-width: 100vw;
    max-height: 100vh;
    min-height: 100vh;    
    background-color: ${props => props.theme.bg};
    padding: 2.5rem;
    overflow: scroll;
    
    grid-template-columns:  1fr;
    grid-template-rows: 3rem 1fr 3rem;
        
    // TODO: keeping these as reference   
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
            <Header />
            <Meta />
            {props.children}
            <Footer />
        </Container>
    )
};