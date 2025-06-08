import {IPost} from "../../models/IPost.ts";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getItems} from "../../services/api.service.ts";

type PostSliceType = {
    posts: IPost[],
};

const initPostSlice:PostSliceType = {posts: []};

const loadPosts = createAsyncThunk('loadPosts', async (_, thunkAPI) => {
    const posts = await getItems<IPost[]>('/posts')
    return thunkAPI.fulfillWithValue(posts)
});

export const postSlice = createSlice({
    name: 'postSlice',
    initialState: initPostSlice,
    reducers: {},
    extraReducers: builder => builder
        .addCase(loadPosts.fulfilled, (state, action:PayloadAction<IPost[]>) => {
            state.posts = action.payload
        })
});

export const postsActions = {...postSlice.actions, loadPosts, }