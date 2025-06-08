import {IUser} from "../../models/IUser.ts";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getItems} from "../../services/api.service.ts";

type UserSliceType = {
    users: IUser[],
};

const initUserSlice:UserSliceType = {users: []};

const loadUsers = createAsyncThunk("loadUsers", async (_, thunkAPI) => {
    const users = await getItems<IUser[]>('/users');
    return thunkAPI.fulfillWithValue(users)
})

export const userSlice = createSlice({
    name: 'userSlice',
    initialState: initUserSlice,
    reducers: {},
    extraReducers: builder => builder
        .addCase(loadUsers.fulfilled, (state, action:PayloadAction<IUser[]>) => {
            state.users = action.payload
        })
});

export const userActions = {...userSlice.actions, loadUsers};