import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import postReducer from '../features/posts/postSlice';
import commentReducer from '../features/comments/commentSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postReducer,
    comments: commentReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const rootState: RootState = store.getState();