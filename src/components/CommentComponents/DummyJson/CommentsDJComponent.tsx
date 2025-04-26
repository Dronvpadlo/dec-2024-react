import React, {useEffect, useState} from 'react';
import {ICommentDJ} from "../../../models/ICommentDJ.ts";
import {getDJComments} from "../../../services/api.service.tsx";
import CommentDJComponent from "./CommentDJComponent.tsx";

const CommentsDJComponent = () => {
    const [comments, setComments] = useState<ICommentDJ[]>([])
    useEffect(() => {
        getDJComments()
            .then(value => setComments(value))
        console.log(comments)
    }, []);
    return (
        <div>
            {
                comments.map((comment, index) => <CommentDJComponent key={index} comment={comment}/>)
            }
        </div>
    );
};

export default CommentsDJComponent;