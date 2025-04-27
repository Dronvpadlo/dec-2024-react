import React, {useEffect, useState} from 'react';
import PostComponent from "./PostComponent.tsx";
import {IPost} from "../../models/IPost.ts";
import {getAll} from "../../services/general.api.service.ts";
import {IBaseResponseModel} from "../../models/IBaseResponseModel.ts";

const PostsComponent = () => {
    const [posts, setPosts] = useState<IPost[]>([])
    useEffect(() => {
        getAll<IBaseResponseModel & {posts: IPost[]}>("/posts")
            .then(value => setPosts(value.posts))
    }, []);
    return (
        <div>
            {
                posts.map((post, index) => <PostComponent key={index} post={post}/> )
            }

            </div>
    );
};

export default PostsComponent;