import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router";

const Cart = () => {
  const cartList = useSelector((state) => state.cart.cartList);

  const allCartItems = cartList.map((item, index) => {
    return <CartItem item={item} key={index} />;
  });

  return (
    <section>
      <header className="shadow-sm flex justify-evenly items-center p-4">
        <div className="flex gap-5 items-center">
          <Link to={"/"}>
          <button><IoArrowBack size={30} /></button>
          </Link>
        <h2 className="text-2xl font-semibold">Shopping Cart</h2>
        </div>
        <div>
          <h4 className="text-lg text-gray-500">4 Items</h4>
        </div>
      </header>

      <div className="flex lg:flex-row  flex-col gap-5 p-6">
       <div className="shadow border-2 w-full border-gray-200 rounded-xl">
         <h2 className="text-xl font-semibold">Cart Items</h2>
      <div>
        {allCartItems.length <= 0 ? <div className="text-2xl text-gray-500 text-center mt-5">No Items in Cart!</div> : <div className="flex flex-col gap-4 p-6">{allCartItems}</div>}
      </div>
       </div>

       <div className="flex lg:w-[40%] w-full flex-col gap-5 p-5 shadow-lg border-2 h-fit border-gray-200 rounded-xl">
          <h3 className="text-xl font-semibold">Order Summary</h3>

          <div className="flex flex-col gap-2">
            <h4 className="text-gray-500 font-semibold">Promo Code</h4>
            <div className="flex gap-4">
              <input className="p-2 border border-gray-300 rounded-lg w-full" type="text" placeholder="Enter code" />
              <button className="py-2 px-4 bg-gray-100 font-semibold rounded-lg">Apply</button>
            </div>
            <h5 className="text-sm text-gray-500">Try code: SAVE10</h5>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex justify-between">
              <h4 className="text-gray-700">Subtotal</h4>
              <h4 className="text-gray-700">$759.95</h4>
            </div>
            <div className="flex justify-between">
              <h4 className="text-gray-700">Shipping</h4>
              <h4 className="text-gray-700">Free</h4>
            </div>
          </div>
          <hr className="text-gray-300" />
          <div className="flex justify-between">
            <h3 className="font-semibold text-xl">Total</h3>
            <h4 className="font-bold text-2xl">$759.95</h4>
          </div>
          <button className="p-3 bg-black text-white font-semibold w-full rounded-lg">Proceed to Checkout</button>
          <hr className="text-gray-300" />
          <h5 className="text-sm text-gray-500">Secure checkout . Free returns within 30 days</h5>
       </div>
      </div>
    </section>
  );
};

export default Cart;
