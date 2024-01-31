import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
  },
  extraReducers: (builder) => {},
});
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
