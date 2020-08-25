import React from 'react';
import styled from 'styled-components';
import {TitleMedium} from "../components/headings";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 5rem;    
    
    p {
        color: ${props => props.theme.primary};
    }
`;

const ContactHeader = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;   
    
    p {
        color: ${props => props.theme.primary};
        font-weight: 200;
    }   
`;

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    min-height: 34rem;
    overflow: scroll;
`;

const InputElement = styled.input`
    border: none;
    background: ${props => props.theme.accentOne};
    min-height: 4.5rem;
    border-radius: 0.2rem;
    padding-left: 1rem;
    font-family: 'Montserrat',sans-serif;
    margin-bottom: 2rem;
    color: ${props => props.theme.primary};
    
    ::placeholder {
        color: ${props => props.theme.secondary};
        font-size: 1.4rem;
        opacity: 0.8;
    }       
`;

const TextArea = styled.textarea`
    min-height: 13rem;
    border: none;
    background: ${props => props.theme.accentOne};
    height: 4.5rem;
    border-radius: 0.2rem;
    padding-left: 1rem;
    padding-top: 1rem;
    font-family: 'Montserrat',sans-serif;
    color: ${props => props.theme.primary};
    
    ::placeholder {
        color: ${props => props.theme.secondary};
        font-size: 1.4rem;
        opacity: 0.8;        
    }         
`;

const Button = styled.button`
    margin-top: 3rem;
    width: 8rem;
    align-self: flex-end;
    height: 3.5rem;
    background: ${props => props.theme.bg};
    border: 1px solid ${props => props.theme.secondary};
    border-radius: 0.4rem;
    font-family: 'Roboto', sans-serif;
    cursor: pointer;     
    color: ${props => props.theme.primary};
`;

export const Contact = () => {
    return (
        <Container>
            <ContactHeader>
                <TitleMedium>
                    Mail me
                </TitleMedium>
                <p>
                    Do you want to work with me, or do you have any questions? Fill out the form and I will get back to you as soon as possble.
                </p>
            </ContactHeader>
            <FormContainer>
                <InputElement type="text" placeholder="Name" />
                <InputElement type="email" placeholder="Mail" />
                <InputElement type="text" placeholder="Subject" />
                <TextArea placeholder="Message" />
                <Button>Send</Button>
            </FormContainer>
        </Container>
    )
}
