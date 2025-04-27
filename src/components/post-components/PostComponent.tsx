import React, {FC} from 'react';
import {IPost} from "../../models/IPost.ts";

type PostsPropsType = {
    post: IPost
}
const PostComponent:FC<PostsPropsType> = ({post}) => {
    return (
        <div>
            {post.id}. {post.title} <br/>
            {post.body}
        </div>
    );
};

export default PostComponent;