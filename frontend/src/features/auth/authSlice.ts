import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";
import { User, registerData } from "../../utils/types";

export interface authState {
    user: User | null,
    isError: boolean,
    isSuccess: boolean,
    isLoading: boolean,
    message: string,
}

const userString = localStorage.getItem("user");

const user = userString ? JSON.parse(userString):null;

const initialState: authState = {
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

// Register user
export const register = createAsyncThunk('auth/register', async (user: registerData, thunkAPI) => {
    try {
        return await authService.register(user);
    } catch(error: any) {
        const message = (error.response && error.response.data && error.response.data.message) 
        || error.mesage || error.toString();

        return thunkAPI.rejectWithValue(message);
    }
});

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = false;
            state.message = '';
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(register.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(register.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.user = action.payload;
        })
    }
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;