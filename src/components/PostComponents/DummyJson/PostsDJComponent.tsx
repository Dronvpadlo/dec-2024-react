import React, {useEffect, useState} from 'react';
import {getDJPosts} from "../../../services/api.service.tsx";
import {IPostDJ} from "../../../models/IPostsDJ.ts";
import PostDJComponent from "./PostDJComponent.tsx";

const PostsDJComponent = () => {
    const [posts, setPosts] = useState<IPostDJ[]>([])
    useEffect(() => {
        getDJPosts()
            .then(value => setPosts(value))
    }, []);
    return (
        <div>
            Posts:
            {
                posts.map((post, index)=> <PostDJComponent key={index} post={post}/>)
            }
        </div>
    );
};

export default PostsDJComponent;