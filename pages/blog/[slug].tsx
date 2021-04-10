import React from 'react';
import fs from "fs";
import {Article} from "../../components/blog/article";
import matter from "gray-matter";
import path from "path";

function ArticlePage({payload}: any) {
    console.log(payload);
    return <Article articleData={payload} />;
}

export async function getStaticPaths() {
    const files = fs.readdirSync('_articles');

    const paths = files.map((filename) => ({
        params: {
            slug: filename.replace('.md', ''),
        },
    }));

    return {
        paths,
        fallback: false,
    };
}

interface ParamsInterface {
    params: {
        slug: string
    }
}

export async function getStaticProps({ params: { slug } }: ParamsInterface) {
    const markdownWithMetadata = fs
        .readFileSync(path.join('_articles', slug + '.md'))
        .toString();

    const { data, content } = matter(markdownWithMetadata);

    const frontmatter = {
        ...data, 
    };

    const payload = {
        content,
        meta: frontmatter
    }

    return {
        props: {
            payload
        },
    };
}

export default ArticlePage;
