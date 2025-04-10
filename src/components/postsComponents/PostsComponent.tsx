import React, {useEffect, useState} from 'react';
import PostComponent from "./PostComponent.tsx";
import {IPost} from "../../models/IPost.ts";
import {getPosts} from "../../services/api.services.tsx";

const PostsComponent = () => {

    const [posts, setPosts] = useState<IPost[]>([])
    useEffect(() => {
        getPosts()
            .then(value => setPosts(value))
    }, []);
    return (
        <div>
            {
                posts.map((post, index) =>
                    <PostComponent post={post} key={index}/>
                )
            }

        </div>
    );
};

export default PostsComponent;