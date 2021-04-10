import React, { useState } from 'react';
import styled from 'styled-components';

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
        <div className='py-6 flex flex-col flex-1 md:mx-56 md:py-80 lg:items-center lg:justify-center'>
            <div className='flex flex-col justify-center mb-4 lg:w-1/3'>
                <h2 className='mb-2 text-xl font-bold md:text-3xl'>Mail me</h2>
                <p className='text-lg md:text-xl'>
                    Do you want to work with me, or do you have any questions?
                    Fill out the form and I will get back to you as soon as
                    possble.
                </p>
            </div>
            {state.isLoading ? (
                <LoadingContainer>loading...</LoadingContainer>
            ) : (
                <form
                    className='flex flex-col flex-1 lg:w-1/3'
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
                    <input
                        className='my-2 h-14 text-lg pl-4 shadow border border-gray-400 rounded'
                        data-input-category="name"
                        onChange={(e) => handleFormInput(e)}
                        value={state.name}
                        required
                        type="text"
                        placeholder="Name"
                    />
                    <input
                        className='my-2 h-14 text-lg pl-4 shadow border border-gray-400 rounded'
                        data-input-category="mail"
                        onChange={(e) => handleFormInput(e)}
                        value={state.mail}
                        required
                        type="email"
                        placeholder="Mail"
                    />
                    <input
                        className='my-2 h-14 text-lg pl-4 shadow border border-gray-400 rounded'
                        data-input-category="subject"
                        onChange={(e) => handleFormInput(e)}
                        value={state.subject}
                        required
                        type="text"
                        placeholder="Subject"
                    />
                    <textarea
                        className='my-2 h-14 text-lg pt-4 pl-4 shadow border border-gray-400 rounded flex-1'
                        data-input-category="message"
                        onChange={(e) => handleFormInput(e)}
                        value={state.message}
                        required
                        placeholder="Message"
                    />
                    <button className="h-16 mt-4 border border-gray-400 shadow rounded-lg hover:bg-black hover:text-white hover:border-black">
                        Send
                    </button>
                </form>
            )}
        </div>
    );
};
