import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../redux/store/Store.tsx";
import {postsActions} from "../redux/slices/postSlice.ts";
import {IPost} from "../models/IPost.ts";

const PostsPage = () => {
    const dispatch = useAppDispatch();
    const posts = useAppSelector((state) => state.postStoreSlice.posts)
    useEffect(() => {
        dispatch(postsActions.loadPosts())
    }, []);
    return (
        <div>
            {
                posts.map((post: IPost) => <div key={post.id}>{post.title}</div>)
            }
        </div>
    );
};

export default PostsPage;