import React, {FC} from 'react';
import {IPostDJ} from "../../../models/IPostsDJ.ts";

type PostPropsType = {
    post: IPostDJ
}
const PostDjComponent:FC<PostPropsType> = ({post}) => {
    return (
        <div>
            {post.id}. {post.title} <br/>
            {post.body}
            <hr/>
            </div>
    );
};

export default PostDjComponent;