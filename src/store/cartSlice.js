import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartList: [], 
    totalQuantity: 0,
  },
  reducers: {
    addToCart (state, action) {
      const newItem = action.payload;

      //Check if newItem exists
      const existingItem = state.cartList.find((item) => {
        return (
          item.id === newItem.id
        )
      })

      if (existingItem) {
        existingItem.quantity++
        existingItem.price += existingItem.price
      } else {
        state.cartList.push({
          id: newItem.id,
          price: newItem.price,
          name: newItem.name,
          image: newItem.image,
          quantity: 1
        })
      }

      state.totalQuantity++
      
    }
  }
})

export const cartActions = cartSlice.actions;
export default cartSlice;