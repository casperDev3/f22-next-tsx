import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CartState {
  products: [];
}

interface Product {
  // Define the properties of the product here
  // Example: id: number, name: string, price: number, etc.
}

const initialState: CartState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProduct } = cartSlice.actions;

export default cartSlice.reducer;
