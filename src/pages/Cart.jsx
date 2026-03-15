import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem'

const Cart = () => {

  const cartList = useSelector(state => state.cart.cartList)

  const allCartItems = cartList.map((item, index) => {
    return (
      <CartItem item={item} key={index} />
    )
  })

  return (
    <div className='flex flex-col gap-4 p-6'>
      {allCartItems}
    </div>
  )
}

export default Cart