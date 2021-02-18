import {useRouter} from "next/router";
import {getAllPosts, getPostBySlug} from "../../api/fetchAllPosts";
import markdownToHtml from "../../api/markdownToHtml";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 5rem;
  align-items: center;

  overflow: hidden;
  
  p {
    margin: 1rem 0 1rem 0;
  }
  
  p > img {
    padding: 0 3rem 0 3rem;
  }
`;

const Title = styled.h1`
    color: ${(props) => props.theme.primary};
    font-size: 2.1rem;
    margin-bottom: 0.6rem;
    
    @media (min-width: 768px) {
      width: 50%;
    }
`;

const ArticleBody = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 100%;
  line-height: 1.5;

  blockquote {
    font-style: italic;    
  }

  h3 {
      margin: 1.5rem 0 1.5rem 0;
  }

  p {
      margin: 0.7rem 0 0.7rem 0;
  }

  p > a {
      color: black;
      cursor: pointer;
      font-weight: bold;
  }

  code {
      background: lightgray;
      padding: 0.7rem 0 0.7rem 2rem;
      min-width: 100%;
      display: block;
  }

  p > code {
      display: initial;
      padding: 0.2rem 0.7rem 0.2rem 0.7rem;
  }

  p > img {
      width: 100%;
      padding: 0;
  }

  @media (min-width: 768px) {
    max-width: 50%;
  }
`;

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

    return (
        <Container>
            <Title>{post.title}</Title>
            <ArticleBody
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