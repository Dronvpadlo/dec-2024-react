import {configureStore} from "@reduxjs/toolkit";
import {commentSlice} from "../slices/commentSlice.ts";
import {userSlice} from "../slices/userSlice.ts";
import {postSlice} from "../slices/postSlice.ts";
import {useDispatch, useSelector} from "react-redux";


export const store = configureStore({
    reducer: {
        userStoreSlice: userSlice.reducer,
        postStoreSlice: postSlice.reducer,
        commentStoreSlice: commentSlice.reducer,
    }
})
export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();
export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>();