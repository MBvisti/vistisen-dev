import React from 'react';
import styled from 'styled-components';
import Header from '../components/header';
import Footer from '../components/footer';

const Container = styled.div`
    background-color: ${(props) => props.theme.bg};
`;

export const Layout = (props: { children: React.ReactNode }) => {
    return (
        <Container className='flex flex-col min-h-screen p-8'>
            <Header />
            {props.children}
            <Footer />
        </Container>
    );
};
