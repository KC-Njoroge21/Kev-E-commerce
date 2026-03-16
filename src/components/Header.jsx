import React from 'react'
import { FaCartPlus } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import { Link } from 'react-router';

const Header = () => {
  
  const totalQuantity = useSelector((state) => state.cart.totalQuantity)


  return (
    <div className='shadow-md'>
      <div className='flex justify-between items-center p-4'>
        <h1 className='lg:text-4xl text-3xl font-semibold'>Our Products</h1> 
        <Link to="/cart">
          <div className='relative'><FaCartPlus size={30} /></div>
          <h2 className='absolute top-1 right-5 bg-gray-500 rounded-full p-2 h-5 w-5 flex items-center justify-center text-white font-semibold'>{totalQuantity}</h2>
        </Link>
      </div>
      <form className='flex p-4 gap-4 w-[60%] min-w-fit mx-auto' action="">
         <input className='p-2 w-full min-w-fit bg-gray-200 rounded-lg' placeholder='Search Products' type="text" />
         <button className='p-2 w-[20%] min-w-fit bg-black text-white font-semibold rounded-lg'>Search</button>
      </form>
    </div>
  )
}

export default Header