import {IComment} from "../../models/IComment.ts";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getItems} from "../../services/api.service.ts";

type CommentSliceType = {
    comments: IComment[],
};

const initCommentSlice:CommentSliceType = {comments: []}

const loadComments = createAsyncThunk('loadComments', async (_, thunkAPI) => {
    const comments = await getItems<IComment[]>('/comments');
    return thunkAPI.fulfillWithValue(comments)
});

export const commentSlice = createSlice({
    name: 'commentSlice',
    initialState: initCommentSlice,
    reducers: {},
    extraReducers: builder => builder
        .addCase(loadComments.fulfilled, (state, action:PayloadAction<IComment[]>) => {
            state.comments = action.payload
        })
});

export const commentsActions = {...commentSlice.actions, loadComments}
