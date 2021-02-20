import React from 'react';
import styled from 'styled-components';
import Link from "next/link";
import { TitleMedium } from '../components/headings';

const Container = styled.div`
    // display: flex;
    // flex-direction: column;
    // padding-top: 5rem;

    // @media (min-width: 640px) {
    //     align-items: center;
    // }

    // @media (min-width: 1024px) {
    //     padding-top: 14rem;
    // }
`;

const ArticleList = styled.div`
    // display: flex;
    // flex-direction: column;
    // margin-top: 1rem;

    // @media (min-width: 640px) {
    //     margin-top: 2rem;
    // }
`;

const Article = styled.div`
    // display: flex;
    // flex-direction: column;
    // line-height: 1.4;
    // cursor: pointer;
`;

const Title = styled.p`
    // margin-bottom: 0.5rem;
    // font-weight: bold;

    // @media (min-width: 640px) {
    //     margin-bottom: 1rem;
    // }
`;

const Posted = styled.p`
    // margin-bottom: 1.2rem;

    // @media (min-width: 640px) {
    //     margin-bottom: 1.9rem;
    // }
`;

export interface Post {
    frontmatter: {
        title: string;
        description: string;
        posted: string;
    };
    slug: string;
}

export interface Articles {
    payload: Post[];
}

export const Blog = ({ payload }: Articles) => {    
    return (
        <Container className='flex-1 flex flex-col mt-8 sm:m-auto sm:mt-28'>
            <TitleMedium className='font-bold mb-4'>Blog posts</TitleMedium>
            <ArticleList>
                {payload.map((article: Post) => (
                    <Link href="/blog/[slug]" as={`/blog/${article.slug}`}>
                        <Article className='cursor-pointer'>
                            <Title className='font-medium'>{article.frontmatter.title}</Title>
                            <Posted className='mt-2 text-xl'>Posted at: {article.frontmatter.posted}</Posted>
                        </Article>
                    </Link>
                ))}
            </ArticleList>
        </Container>
    );
};
