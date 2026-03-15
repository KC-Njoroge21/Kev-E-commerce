import React from 'react'

const CartItem = (props) => {
  return (
    <div>
      <div>
        <img src={props.item.img} alt="" />
      </div>
      <div>
        <h2>{props.item.price}</h2>
      </div>
    </div>
  )
}

export default CartItem