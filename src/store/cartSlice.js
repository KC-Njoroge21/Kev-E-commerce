import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartList: []
  },
  reducers: {

  }
})

export const cartActions = cartSlice.actions;
export default cartSlice;