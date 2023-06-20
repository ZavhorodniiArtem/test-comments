import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IComment} from "../../models/models";

interface CommentsState  {
    comments: IComment[]
}

const initialState: CommentsState = {
    comments: [],
}

export const dummySlice = createSlice({
    name: "dummy",
    initialState,
    reducers: {
        allComments(state, action: PayloadAction<IComment[]>) {
            state.comments = action.payload
        },
        addComment(state, action: PayloadAction<IComment>) {
            state.comments = [...state.comments, action.payload]
        },
        removeComment(state, action: PayloadAction<number>) {
            state.comments = state.comments.filter((item) => item.id !== action.payload)
        },
    },
})

export const dummyActions = dummySlice.actions
export const dummyReducer = dummySlice.reducer