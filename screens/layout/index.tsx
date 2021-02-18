import React from 'react';
import styled from 'styled-components';
import Header from '../components/header';
import Footer from '../components/footer';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 100vw;
    min-height: 100vh;
    padding: 0 2.5rem 0 2.5rem;
    background-color: ${(props) => props.theme.bg};
    overflow: scroll;

    grid-template-rows: 5rem 1fr 3rem;

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


export const Layout = (props: { children: React.ReactNode }) => {
    return (
        <Container>
            <Header />
                {props.children}
            <Footer />
        </Container>
    );
};
