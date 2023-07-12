import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";
import { User, RegisterData, LoginData } from "../../utils/types";
import { toast } from "react-toastify";

export interface authState {
    user: User | null,
    isError: boolean,
    isSuccess: boolean,
    isLoading: boolean,
    message: string | any,
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
export const register = createAsyncThunk('auth/register', async (user: RegisterData, thunkAPI) => {
    try {
        return await authService.register(user);
    } catch(error: any) {
        const message = (error.response && error.response.data && error.response.data.message) 
        || error.mesage || error.toString();

        return thunkAPI.rejectWithValue(message);
    }
});

export const login = createAsyncThunk('auth/login', async (user: LoginData, thunkAPI) => {
    try {
        return await authService.login(user);
    } catch(error: any) {
        const message = (error.response && error.response.data && error.response.data.message) 
        || error.mesage || error.toString();

        return thunkAPI.rejectWithValue(message);
    }
})

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = false;
            state.message = '';
        },
        logout: (state) => {
            localStorage.removeItem("user");
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = false;
            state.user = null;
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
            toast.success("Successfully registered");
        })
        .addCase(register.rejected, (state, action) => {
            state.isError = true;
            state.isLoading = false;
            state.isSuccess = false;
            state.user = null;
            state.message = action.payload;
        })
        .addCase(login.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(login.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.user = action.payload;
        })
        .addCase(login.rejected, (state, action) => {
            state.isError = true;
            state.isLoading = false;
            state.isSuccess = false;
            state.message = action.payload;
            state.user = null;
        })
        

    }
});

export const { reset, logout } = authSlice.actions;
export default authSlice.reducer;