import React from 'react';
import {Blog} from "../screens/blog";
import fs from "fs";
import matter from "gray-matter";

export default function BlogPage({data}: any) {
    return (
        <Blog payload={data} />
    )
}

export async function getStaticProps() {
    const postDir = fs.readdirSync(`${process.cwd()}/_articles`)
    

  const data = postDir.map((filename) => {
    const markdownWithMetadata = fs.readFileSync(`_articles/${filename}`).toString();

    const { data } = matter(markdownWithMetadata);

    const frontmatter = {
      ...data,      
    };

    return {
      slug: filename.replace(".md", ""),
      frontmatter,
    };
  });
    return { 
        props: {
          data
        }
    }
}