import { configureStore } from '@reduxjs/toolkit';
import modalSlice from './modalSlice';
import shipsSlice from './shipsSlice';

export const store = configureStore({
  reducer: {
    ships: shipsSlice,
    modal: modalSlice,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
