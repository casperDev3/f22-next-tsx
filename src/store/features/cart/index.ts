import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CartState {
  products: [];
}

interface Product {}

const initialState: CartState = {
  products: [],
};

export const counterSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      // state.products.push(action.payload);
      let products: never[] = state.products;
      // check if product already exists
      const productExists = products.find(
        (product) => product?.id === action.payload.id
      );
      if (productExists) {
        // update quantity
        products = products.map((product) => {
          if (product?.id === action.payload.id) {
            product.quantity++;
          }
          return product;
        });
      } else {
        products.push({ ...action.payload, quantity: 1 });
      }
      state.products = products;
      // add to LS
      localStorage.setItem("cart", JSON.stringify(state.products));
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      let products: never[] = state.products;
      products = products.filter((product) => product?.id !== action.payload);
      state.products = products;
      // add to LS
      localStorage.setItem("cart", JSON.stringify(state.products));
    },
    removeOneProduct: (state, action: PayloadAction<number>) => {
      let products: never[] = state.products;
      // check if product already exists
      const productExists = products.find(
        (product) => product?.id === action.payload
      );
      if (productExists) {
        if (productExists.quantity > 1) {
          products = products.map((product) => {
            if (product?.id === action.payload) {
              product.quantity--;
            }
            return product;
          });
        } else {
          products = products.filter(
            (product) => product?.id !== action.payload
          );
        }
      }
      state.products = products;
      // add to LS
      localStorage.setItem("cart", JSON.stringify(state.products));
    },
    clearCart: (state) => {
      state.products = [];
      // add to LS
      localStorage.setItem("cart", JSON.stringify(state.products));
    },
    updateFromLS: (state) => {
      const cart = localStorage.getItem("cart");
      if (cart) {
        state.products = JSON.parse(cart);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addProduct,
  removeProduct,
  clearCart,
  updateFromLS,
  removeOneProduct,
} = counterSlice.actions;

export default counterSlice.reducer;
