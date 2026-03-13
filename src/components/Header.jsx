import React from 'react'
import { FaCartPlus } from "react-icons/fa6";

const Header = () => {
  return (
    <div className='shadow-md'>
      <div className='flex justify-between items-center p-4'>
        <h1 className='lg:text-4xl text-3xl font-semibold'>Our Products</h1> 
        <h4 className='text-lg'>8 Products available</h4>
        <div><FaCartPlus size={30} /></div>
      </div>
      <form className='flex p-4 gap-4 w-[60%] mx-auto' action="">
         <input className='p-2 w-full bg-gray-200 rounded-lg' placeholder='Search Products' type="text" />
         <button className='p-2 w-[20%] bg-black text-white font-semibold rounded-lg'>Search</button>
      </form>
    </div>
  )
}

export default Header