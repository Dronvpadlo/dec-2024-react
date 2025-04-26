import React, {FC} from 'react';
import {IComment} from "../../../models/IComment.ts";

type CommentPropsType = {
    comment: IComment
}
const CommentJSONPlaceholderComponent:FC<CommentPropsType> = ({comment}) => {
    return (
        <div>
            {comment.id}. {comment.name} <br/>
            {comment.body}
            </div>
    );
};

export default CommentJSONPlaceholderComponent;