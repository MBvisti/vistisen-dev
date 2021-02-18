import React from "react";
import styled from "styled-components";
import Link from 'next/link';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding-top: 5rem;

  // h2 {
  //   margin-bottom: 0.7rem;
  // }
  //
  // p {
  //   color: ${(props) => props.theme.primary};
  //   font-size: 1.2rem;
  //   font-weight: 300;
  // }
  //
  // @media (min-width: 640px) {
  //   margin: auto 20%;
  // }
  //
  // @media (min-width: 1024px) {
  //   margin: 0 15%;
  //   flex-direction: row;
  //   justify-content: space-between;
  //   padding-top: 20rem;
  // }
`;

const Title = styled.h1`
    color: ${(props) => props.theme.primary};
    font-size: 2.1rem;
    margin-bottom: 0.6rem;
`

const SubTitle = styled.p`
    line-height: 1.4;
`

const PostsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    
    line-height: 1.4;
    cursor: pointer;
`

interface Post {
    title: string;
    slug: string;
}

interface StaticProps {
    props: Post[]
}


export const Blog = (allPosts: StaticProps) => {
    return (
        <Container>
            <Title>Blog posts</Title>
            <SubTitle>I write mostly about programming and business topics.</SubTitle>
            <PostsContainer>
                {allPosts.props.map(el => <Link href={'blog/'+el.slug}><p>{el.title}</p></Link>)}
            </PostsContainer>
        </Container>
    );
};