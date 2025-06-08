import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../redux/store/Store.tsx";
import {userActions} from "../redux/slices/userSlice.ts";
import {postsActions} from "../redux/slices/postSlice.ts";
import {commentsActions} from "../redux/slices/commentSlice.ts";

const ComplexPage = () => {
    const dispatch = useAppDispatch();
    const {userStoreSlice: {users}, postStoreSlice: {posts}, commentStoreSlice: {comments}} = useAppSelector(state => state);
    useEffect(() => {
        if(!users.length){
            dispatch(userActions.loadUsers());
        }
        if(!posts.length){
            dispatch(postsActions.loadPosts);
        }
        if(!comments.length){
            dispatch(commentsActions.loadComments());
        }
    }, []);
    return (
        <div>
            users:
            {
                users.map((user) => <div key={user.id}>{user.name}</div>)
            }
            Posts:
            {
                posts.map((post) => <div key={post.id}>{post.title}</div>)
            }
            Comments:
            {
                comments.map((comment) => <div key={comment.id}>{comment.name}</div>)
            }
        </div>
    );
};

export default ComplexPage;