import React, {FC, useEffect, useState} from 'react';
import {IPost} from "../../models/IPost.ts";
import {getPostsByUserId} from "../../services/api.services.tsx";
import PostComponent from "../postsComponents/PostComponent.tsx";

type UserPostsPropsType = {
    userId: string
}
const UserPostsComponent:FC<UserPostsPropsType> = ({userId}) => {

    const [posts, setPosts] = useState<IPost[]>([])
    useEffect(() => {
        if(userId){
            getPostsByUserId(+userId)
                .then(value => setPosts(value))

        }

    }, [userId]);
    return (
        <div>
            {
                posts.map((post, index) => <PostComponent key={index} post={post}/>)
            }
            </div>
    );
};

export default UserPostsComponent;