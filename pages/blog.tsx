import {Blog} from "../screens/blog";
import {getAllPosts} from "../api/fetchAllPosts";
import React from "react";


interface Post {
    title: string;
    slug: string;
}

interface StaticProps {
    allPosts: Post[]
}


export default function BlogPage({allPosts}: StaticProps) {
    return (
        <Blog props={allPosts} />
    )
}

export const getStaticProps = async () => {
    const allPosts = getAllPosts([
        'title',
        'slug',
    ])

    return {
        props: {
            allPosts
        },
    }
}