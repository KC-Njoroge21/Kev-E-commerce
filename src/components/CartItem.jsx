import React from "react";
import { LuPlus } from "react-icons/lu";
import { FiMinus } from "react-icons/fi";
import { GoTrash } from "react-icons/go";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cartSlice";

const CartItem = (props) => {

  const dispatch = useDispatch()

  const incrementItem = () => {
    dispatch(cartActions.addToCart({
      id: props.item.id,
      name: props.item.title,
      price: props.item.price
    
    }))
  }

  const decrementItem = () => {
    dispatch(cartActions.removeFromCart(props.item.id))
  }

  const deleteFromCart = () => {
    dispatch(cartActions.deleteFromCart(props.item.id))
  }

  

  return (
    <div className="flex p-4 gap-4 border-b border-gray-300">
      
      <div className="w-25 h-25 p-2 shadow-lg rounded-lg">
        <img
          className="w-full h-full object-cover"
          src={props.item.image}
          alt="Item img"
        />
      </div>

      <div className="flex w-full flex-col">
        <div>
          <h2 className="text-lg font-semibold">{props.item.name}</h2>
        </div>

        <div className="flex justify-between h-full">
          <div className="flex gap-4 items-center  w-full">
            <button onClick={decrementItem} className="p-2 shadow-lg rounded-lg border border-gray-200">
              <FiMinus />
            </button>
            <h2>{props.item.quantity}</h2>
            <button onClick={incrementItem} className="p-2 shadow-lg rounded-lg border border-gray-200">
              <LuPlus />
            </button>
          </div>

          <div className="w-full flex items-center gap-4 justify-end">
            <h2 className="text-lg font-semibold ">${props.item.totalPrice.toFixed(2)}</h2>
            <button onClick={deleteFromCart}>
              <GoTrash size={25} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
