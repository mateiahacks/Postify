import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { Comment, CommentData } from "../../utils/types"
import { errorMessage } from "../../utils/helpers";
import commentService from "./commentService";
import { toast } from "react-toastify";


interface commentsState {
    items: Array<Comment>,
    isLoading: boolean,
    isError: boolean,
    message: any,
}

const initialState: commentsState = {
    items: [],
    isLoading: false,
    isError: false,
    message: '',
}

export const createComment = createAsyncThunk('comments/create', async (comment: CommentData, thunkAPI) => {
    try {
        return commentService.addComment(comment);
    } catch(error: any) {
        const message = errorMessage(error);
        return thunkAPI.rejectWithValue(message);
    }  
});

export const getComments = createAsyncThunk('comments/get', async (postId: string, thunkAPI) => {
    try {
        return commentService.getComments(postId);
    } catch(error: any) {
        const message = errorMessage(error);
        return thunkAPI.rejectWithValue(message);
    }  
})

export const commentsSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {
        reset: (state) => {
            state.items = [];
            state.isLoading = false;
            state.isError = false;
            state.message = '';
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getComments.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getComments.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            console.log(action.payload);
            state.items = action.payload;
        })
        .addCase(createComment.pending, (state) => {
    
        })
        .addCase(createComment.fulfilled, (state, action) => {
            state.isLoading = false;
            state.message = '';
            state.isError = true;
            state.items.push(action.payload);
            toast.success("Comment successfully added");
        })
        .addCase(createComment.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
    }
});

export const { reset } = commentsSlice.actions;
export default commentsSlice.reducer;