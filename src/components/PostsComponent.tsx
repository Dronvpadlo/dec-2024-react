import React from 'react';
import {useFetch} from "../hooks/UseFetch.tsx";
import {IPost} from "../models/IPost.ts";

const PostsComponent = () => {
    const posts = useFetch<IPost[]>('https://jsonplaceholder.typicode.com/posts');
    return (
        <div>
            {
                posts.map((post, index) => <div key={index}>{post.id}. {post.title}</div>)
            }

        </div>
    );
};

export default PostsComponent;