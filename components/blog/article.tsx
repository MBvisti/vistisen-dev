import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { hopscotch } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const Container = styled.article`
    p {
        margin: 1rem 0 1rem 0;
        line-height: 1.5;
    }

    p > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    p > a {
        text-decoration: underline;
        font-weight: bold;
    }

    pre {
        border-radius: 0.4rem;
    }

    ul {
        list-style: inside;
        margin-top: 0;
        margin-bottom: 0.5rem;

        li {
            font-family: "Roboto", sans-serif
        }
    }

    blockquote {
        padding-left: 2rem;
        border-left: 0.3rem solid black;

        p {
            font-style: italic;
            font-weight: lighter;
        }
    }

    h1, h2, h3 {
        font-weight: bold;
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

interface Render {
    language: string
    value: any
}

const renderers = (): {} => {
    return {
        code: ({ language, value }: Render) => {
            return <SyntaxHighlighter language={language} style={hopscotch} children={value} />
        }
    }
}

export const Article = ({ articleData }: Payload) => {
    const render = renderers()
    return (
        <Container className='flex flex-col sm:w-3/6 justify-center sm:mx-auto overflow-x-hidden'>
            <h2 className='mb-12 mt-8 font-bold text-3xl'>{articleData.meta.title}</h2>
            <ReactMarkdown renderers={render} source={articleData.content} />
        </Container>
    );
};
