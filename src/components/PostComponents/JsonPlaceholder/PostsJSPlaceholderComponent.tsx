import React, {useEffect, useState} from 'react';
import {IPost} from "../../../models/IPost.ts";
import {getJPPosts} from "../../../services/api.service.tsx";
import PostJSPlaceholderComponent from "./PostJSPlaceholderComponent.tsx";

const PostsJsPlaceholderComponent = () => {

    const [posts, setPosts] = useState<IPost[]>([])
    useEffect(() => {
        getJPPosts()
            .then(value => setPosts(value))
    }, []);
    return (
        <div>
            {
                posts.map((post, index) => <PostJSPlaceholderComponent key={index} post={post}/>)
            }
        </div>
    );
};

export default PostsJsPlaceholderComponent;