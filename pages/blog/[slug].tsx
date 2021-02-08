import {useRouter} from "next/router";
import {getAllPosts, getPostBySlug} from "../../api/fetchAllPosts";
import markdownToHtml from "../../api/markdownToHtml";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  // overflow-y: scroll;
  padding-top: 5rem;
  margin: 0 25%;
  
  p {
    margin: 1rem 0 1rem 0;
  }
  
  p > img {
    padding: 0 3rem 0 3rem;
  }
  
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

const CoverImg = styled.image``

type Props = {
    post: {
        title: string;
        date: string;
        author: {
            name: string;
            picture: string;
        }
        content: string;
        slug: string;
    }
}


function Post({post}: Props) {
    const router = useRouter()

    if (!router.isFallback && !post.slug) {
        return <p>error</p>
    }

    console.log(post)
    return (
        <Container>
            <Title>{post.title}</Title>
            <div
                dangerouslySetInnerHTML={{ __html: post.content }}
            />
        </Container>
    )
}

export default Post

type Params = {
    params: {
        slug: string
    }
}

export const getStaticProps = async ({ params }: Params) => {
    const post = getPostBySlug(params.slug, [
        'title',
        'date',
        'slug',
        'author',
        'content',
        'ogImage',
        'coverImage',
    ])
    const content = await markdownToHtml(post.content || '')

    return {
        props: {
            post: {
                ...post,
                content,
            },
        },
    }
}

export const getStaticPaths = async () => {
    const posts = getAllPosts(['slug'])

    return {
        paths: posts.map((posts) => {
            return {
                params: {
                    slug: posts.slug,
                },
            }
        }),
        fallback: false,
    }
}