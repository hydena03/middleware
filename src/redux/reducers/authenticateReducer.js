import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList: [],
  selectedItem: null
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getAllProduct(state, action) {
      state.productList = action.payload.data;
    },
    getSingleProduct(state, action) {
      state.selectedItem = action.payload.data;
    }
  }
});

export const { getAllProduct, getSingleProduct } = productSlice.actions;
export default productSlice.reducer;
