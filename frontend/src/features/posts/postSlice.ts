import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Post, PostData, PostEditData } from "../../utils/types";
import postService from '../posts/postService';
import { toast } from "react-toastify";
import { errorMessage } from "../../utils/helpers";

export interface postsState {
    items: Array<Post>,
    pageSize: number,
    currentPage: number,
    isError: boolean,
    isSuccess: boolean,
    isLoading: boolean,
    isCreating: boolean,
    isCreated: boolean,
    message: string,
}

const initialState: postsState = {
    items: [],
    pageSize: 3,
    currentPage: 1,
    isError: false,
    isSuccess: false,
    isLoading: false,
    isCreating: false,
    isCreated: false,
    message: '',
}

export const getPosts = createAsyncThunk('posts/get', async (page: number, thunkAPI) => {
    try {
        return postService.fetchPosts(page);
    } catch (error: any) {
        const message = errorMessage(error);

        return thunkAPI.rejectWithValue(message);
    }
});

export const createPost = createAsyncThunk('posts/create', async (postData: PostData, thunkAPI) => {
    try {
        return postService.createPost(postData);
    } catch(error: any) {
        const message = errorMessage(error);
        return thunkAPI.rejectWithValue(message);
    }  
});

export const deletePost = createAsyncThunk('posts/delete', async (postId: string, thunkAPI) => {
    try {
        return postService.deletePost(postId);
    } catch(error: any) {
        const message = errorMessage(error);
        return thunkAPI.rejectWithValue(message);
    }  
});

export const editPost = createAsyncThunk('posts/edit', async (data: PostEditData, thunkAPI) => {
    try {
        return postService.editPost(data);
    } catch(error: any) {
        const message = errorMessage(error);
        return thunkAPI.rejectWithValue(message);
    } 
})

export const likePost = createAsyncThunk('posts/like', async (id: string, thunkAPI) => {
    try {
        return postService.likePost(id);
    } catch(error: any) {
        const message = errorMessage(error);
        return thunkAPI.rejectWithValue(message);
    }  
})

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
            state.items = action.payload.posts;
            state.pageSize = action.payload.page_size;
        })
        .addCase(getPosts.rejected, (state, action) => {
            state.isSuccess = false;
            state.isLoading = false;
            state.isError = true;
        })
        .addCase(createPost.fulfilled, (state, action) => {
            state.isError = false;
            state.isLoading = false;
            state.isCreating = false;
            state.isCreated = true;
            if (state.items.length !== state.pageSize)
                state.items.push(action.payload);
            toast.success("Post created succesfully!");
        })
        .addCase(createPost.pending, (state) => {
            state.isCreating = true;
        })
        .addCase(likePost.fulfilled, (state, action) => {
            const id = action.payload._id;
            state.items = state.items.map((e) => e._id === id ? action.payload : e);
        })
        .addCase(deletePost.fulfilled, (state, action) => {
            const id = action.payload;
            state.items = state.items.filter((e) => e._id !== id);
            toast.success("Post delted successfully");
        })
        .addCase(editPost.pending, (state) => {
            state.isCreating = true;
        })
        .addCase(editPost.fulfilled, (state, action) => {
            const newPost = action.payload;
            state.items = state.items.map((e) => e._id === newPost._id ? newPost : e);
            state.isCreating = false;
            state.isCreated = true;
            toast.success("Post saved successfully");
        })
    }
});

export default postsSlice.reducer;