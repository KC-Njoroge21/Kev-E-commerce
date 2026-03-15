import React from 'react'
import { FaCartPlus } from "react-icons/fa6";
import { Link } from 'react-router';

const Header = () => {
  return (
    <div className='shadow-md'>
      <div className='flex justify-between items-center p-4'>
        <h1 className='lg:text-4xl text-3xl font-semibold'>Our Products</h1> 
        <h4 className='text-lg'>8 Products available</h4>
        <Link to="/cart">
          <div><FaCartPlus size={30} /></div>
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