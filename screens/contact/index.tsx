import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100%;
            
    h1 {
        color: ${props => props.theme.primary};
        color: white;
    }
    
    p {
        color: ${props => props.theme.primary};
    }
`;

const ContactHeader = styled.div`
    flex: 0 1 20%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-bottom: 2rem;
    
    h1 {
        color: ${props => props.theme.primary};
        color: white;
        font-size: 2.1rem;
        margin-bottom: 1rem;
    }
    
    p {
        color: ${props => props.theme.primary};
        font-weight: 200;
    }
    
    @media (max-height: 70rem) {
        margin-top: 5rem;
    }
`;

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 10rem;
    justify-content: space-between;     
    margin-bottom: 2rem;
`;

const InputElement = styled.input`
    border: none;
    background: ${props => props.theme.accentOne};
    height: 4.5rem;
    border-radius: 0.2rem;
    padding-left: 1rem;
    font-family: 'Montserrat',sans-serif;
    
    ::placeholder {
        color: ${props => props.theme.secondary};
        font-size: 1.4rem;
        opacity: 0.8;
    }       
`;

const TextArea = styled.textarea`
    flex: 0 1 calc(100% - 65%);
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
    
    @media (min-height: 800px) {
        flex: 0 1 calc(100% - 55%);
    }  
`;

const Button = styled.button`
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
                <h1>
                    Mail me
                </h1>
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
