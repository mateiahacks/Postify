import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Post } from "../../utils/types";
import postService from '../posts/postService';

export interface postsState {
    items: Array<Post>,
    isError: boolean,
    isSuccess: boolean,
    isLoading: boolean,
    message: string,
}

const initialState: postsState = {
    items: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

export const getPosts = createAsyncThunk('posts/get', async (_, thunkAPI) => {
    try {
        return postService.fetchPosts();
    } catch (error: any) {
        const message = (error.response && error.response.data && error.response.data.message) 
        || error.mesage || error.toString();

        return thunkAPI.rejectWithValue(message);
    }
});

export const postsSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.items = [];
            state.isError = false;
            state.isSuccess = false;
            state.isLoading = false;
            state.message = '';
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getPosts.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getPosts.fulfilled, (state, action) => {
            state.isSuccess = true;
            state.isLoading = false;
            state.isError = false;
            state.items = action.payload;
        })
        .addCase(getPosts.rejected, (state, action) => {
            state.isSuccess = false;
            state.isLoading = false;
            state.isError = true;
        })
    }
});

export default postsSlice.reducer;