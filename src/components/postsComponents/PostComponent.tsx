import React, {FC} from 'react';
import {IPost} from "../../models/IPost.ts";

type PostsTypeProps = {
    post: IPost;
}
const PostComponent:FC<PostsTypeProps> = ({post}) => {
    return (
        <div>
            {post.id}. {post.title} <br/>
            Body: {post.body} <br/>
            User ID: {post.userId} <br/>
        </div>
    );
};

export default PostComponent;