import React from 'react';
import Link from "next/link";

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
        <div className='flex-1 flex flex-col mt-8 sm:m-auto sm:mt-28'>
            <h2 className='font-bold mb-4'>Blog posts</h2>
            <div>
                {payload.map((article: Post) => (
                    <Link href="/blog/[slug]" as={`/blog/${article.slug}`}>
                        <div className='cursor-pointer'>
                            <p className='font-medium'>{article.frontmatter.title}</p>
                            <p className='mt-2 text-xl'>Posted on: {article.frontmatter.posted}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};
