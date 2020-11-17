import React, { useState } from 'react';
import styled from 'styled-components';
import { TitleMedium } from '../components/headings';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 5rem;

    p {
        color: ${(props) => props.theme.primary};
    }

    @media (min-width: 640px) {
        margin: auto 5rem;
    }

    @media (min-width: 1024px) {
        margin: 0 25rem;
        justify-content: center;
    }

    @media (min-width: 1025px) {
        margin: 0 35rem;
        justify-content: center;
    }
`;

const ContactHeader = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;

    p {
        color: ${(props) => props.theme.primary};
        font-weight: 200;
    }
`;

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    min-height: 34rem;
    overflow: scroll;

    @media (min-width: 640px) {
        min-height: 33rem;
    }
`;

const InputElement = styled.input`
    border: none;
    background: ${(props) => props.theme.accentOne};
    min-height: 4.5rem;
    border-radius: 0.2rem;
    padding-left: 1rem;
    font-family: 'Montserrat', sans-serif;
    margin-bottom: 2rem;
    font-size: 1.4rem;
    color: ${(props) => props.theme.accentTwo};

    ::placeholder {
        color: ${(props) => props.theme.accentTwo};
        font-size: 1.4rem;
        opacity: 0.8;
    }
`;

const TextArea = styled.textarea`
    min-height: 13rem;
    border: none;
    background: ${(props) => props.theme.accentOne};
    height: 4.5rem;
    border-radius: 0.2rem;
    padding-left: 1rem;
    padding-top: 1rem;
    font-family: 'Montserrat', sans-serif;
    color: ${(props) => props.theme.accentTwo};
    outline: none !important;
    font-size: 1.4rem;

    ::placeholder {
        color: ${(props) => props.theme.accentTwo};
        font-size: 1.4rem;
        opacity: 0.8;
    }
`;

const Button = styled.button`
    margin-top: 3rem;
    width: 8rem;
    align-self: flex-end;
    height: 3.5rem;
    background: ${(props) => props.theme.bg};
    border: 1px solid ${(props) => props.theme.secondary};
    border-radius: 0.4rem;
    font-family: 'Roboto', sans-serif;
    cursor: pointer;
    color: ${(props) => props.theme.primary};

    :hover {
        background: ${(props) => props.theme.primary};
        border: 1px solid ${(props) => props.theme.accentTwo};
        color: ${(props) => props.theme.accentTwo};
    }
`;

const LoadingContainer = styled.div`
    min-height: 34rem;
`;

export const Contact = () => {
    const [state, setState] = useState({
        isLoading: false,
        error: false,
        name: '',
        mail: '',
        subject: '',
        message: '',
    });

    const handleFormInput = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { value } = e.target;
        const { inputCategory } = e.target.dataset;

        setState({
            ...state,
            [inputCategory as string]: value,
        });
    };

    return (
        <Container>
            <ContactHeader>
                <TitleMedium>Mail me</TitleMedium>
                <p>
                    Do you want to work with me, or do you have any questions?
                    Fill out the form and I will get back to you as soon as
                    possble.
                </p>
            </ContactHeader>
            {state.isLoading ? (
                <LoadingContainer>loading...</LoadingContainer>
            ) : (
                <FormContainer
                    onSubmit={async (e) => {
                        e.preventDefault();

                        setState({
                            ...state,
                            isLoading: !state.isLoading,
                        });

                        const data = {
                            name: state.name,
                            mail: state.mail,
                            subject: state.subject,
                            message: state.message,
                        };

                        const req = await fetch(
                            'https://vistisen-production.herokuapp.com/v1/api/contact',
                            {
                                method: 'POST',
                                body: JSON.stringify(data),
                            }
                        );

                        const { res_code } = await req.json();

                        if (res_code !== 200) {
                            setState({
                                ...state,
                                isLoading: false,
                                error: true,
                            });
                        }

                        if (res_code === 200) {
                            setState({
                                isLoading: false,
                                error: false,
                                subject: '',
                                mail: '',
                                name: '',
                                message: '',
                            });
                        }
                    }}
                >
                    <InputElement
                        data-input-category="name"
                        onChange={(e) => handleFormInput(e)}
                        value={state.name}
                        required
                        type="text"
                        placeholder="Name"
                    />
                    <InputElement
                        data-input-category="mail"
                        onChange={(e) => handleFormInput(e)}
                        value={state.mail}
                        required
                        type="email"
                        placeholder="Mail"
                    />
                    <InputElement
                        data-input-category="subject"
                        onChange={(e) => handleFormInput(e)}
                        value={state.subject}
                        required
                        type="text"
                        placeholder="Subject"
                    />
                    <TextArea
                        data-input-category="message"
                        onChange={(e) => handleFormInput(e)}
                        value={state.message}
                        required
                        placeholder="Message"
                    />
                    <Button className="umami--click--send-mail-button">
                        Send
                    </Button>
                </FormContainer>
            )}
        </Container>
    );
};
