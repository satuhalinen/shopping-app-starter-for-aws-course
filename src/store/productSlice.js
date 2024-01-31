import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    const data = response.data;
    return data;
  }
);
const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
  },

  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  
  },
});

export default productSlice.reducer;

