import React, {useEffect, useState} from 'react';
import {IComment} from "../../../models/IComment.ts";
import {getJPComments} from "../../../services/api.service.tsx";
import CommentJSONPlaceholderComponent from "./CommentJSONPlaceholderComponent.tsx";

const CommentsJSONPlaceholderComponent = () => {
    const [comments, setComments] = useState<IComment[]>([])
    useEffect(() => {
        getJPComments()
            .then(value => setComments(value))
    }, []);
    return (
        <div>
            {
                comments.map((comment, index) => <CommentJSONPlaceholderComponent key={index} comment={comment}/>)
            }
        </div>
    );
};

export default CommentsJSONPlaceholderComponent;