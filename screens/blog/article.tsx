import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown/with-html';

const Container = styled.article`
    display: flex;
    flex-direction: column;
    padding-top: 5rem;
    overflow-y: scroll;
    padding-right: 2rem;

    p {
        margin: 1rem 0 1rem 0;
        line-height: 1.5;
    }

    p > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @media (min-width: 640px) {
        align-items: center;
    }

    @media (min-width: 1024px) {
        padding-top: 14rem;
    }
`;

interface Payload {
    articleData: {
        content: string;
        meta: {
            description: string;
            posted: string;
            title: string;
        };
    };
}

export const Article = ({ articleData }: Payload) => {
    return (
        <Container>
            <ReactMarkdown escapeHtml={false} source={articleData.content} />
        </Container>
    );
};
