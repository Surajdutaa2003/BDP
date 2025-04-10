import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "./cartSlice";

interface OrderState {
  orders: CartItem[];
}

const initialState: OrderState = {
  orders: JSON.parse(localStorage.getItem("orders") || "[]"),
};

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addOrders: (state, action: PayloadAction<CartItem[]>) => {
      state.orders = [...state.orders, ...action.payload];
      localStorage.setItem("orders", JSON.stringify(state.orders));
    },
    clearOrders: (state) => {
      state.orders = [];
      localStorage.removeItem("orders");
    },
  },
});

export const { addOrders, clearOrders } = orderSlice.actions;
export default orderSlice.reducer;
