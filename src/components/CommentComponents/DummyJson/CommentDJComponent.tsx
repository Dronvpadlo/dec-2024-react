import React, {FC} from 'react';
import {ICommentDJ} from "../../../models/ICommentDJ.ts";

type CommentPropsType = {
    comment: ICommentDJ
}
const CommentDJComponent:FC<CommentPropsType> = ({comment}) => {
    return (
        <div>
            {comment.id}. {comment.user.fullName}
            <hr/>
        </div>
    );
};

export default CommentDJComponent;