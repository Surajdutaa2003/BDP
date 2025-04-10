import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./bookSlice";
import searchReducer from "./searchSlice";
import cartReducer from "./cartSlice";
import orderReducer from './OrderSlice'; // ✅ matches filename casing

export const store = configureStore({
    reducer: {
        books: bookReducer,
        search: searchReducer,
        cart: cartReducer,
        orders: orderReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;