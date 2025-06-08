import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../redux/store/Store.tsx";
import {commentsActions} from "../redux/slices/commentSlice.ts";
import {IComment} from "../models/IComment.ts";

const CommentsPage = () => {
    const dispatch = useAppDispatch();
    const comments = useAppSelector((state) => state.commentStoreSlice.comments)
    useEffect(() => {
        dispatch(commentsActions.loadComments())
    }, []);
    return (
        <div>
            {
                comments.map((comment: IComment) => <div key={comment.id}>{comment.name}</div>)
            }
        </div>
    );
};

export default CommentsPage;