import { configureStore } from "@reduxjs/toolkit";
// feature reducers
import counterReducer from "@/store/features/counter";
import cartReducer from "@/store/features/cart";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
