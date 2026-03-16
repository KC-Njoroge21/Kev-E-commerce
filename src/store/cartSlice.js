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
        existingItem.totalPrice += existingItem.price
      } else {
        state.cartList.push({
          id: newItem.id,
          price: newItem.price,
          totalPrice: newItem.price,
          name: newItem.name,
          image: newItem.image,
          quantity: 1
        })
      }

      state.totalQuantity++
      
    },
    
    removeFromCart (state, action) {
      const id = action.payload

      const itemExists = state.cartList.find((item) => {
        return (
          item.id === id
        )
      })

      if (itemExists.quantity === 1) {
        state.cartList = state.cartList.filter((item) => {
          return (
            item.id !== id
          )
        })
      }
      else {
        itemExists.quantity--,
        itemExists.totalPrice -=itemExists.price
      }

      state.totalQuantity--
    },

    deleteFromCart (state, action) {
      const id = action.payload

      state.cartList = state.cartList.filter((item) => {
        return (
          item.id !== id
        )
      })
    }
  }
})

export const cartActions = cartSlice.actions;
export default cartSlice;