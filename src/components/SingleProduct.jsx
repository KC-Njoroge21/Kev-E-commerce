import React from 'react'
import { IoCartOutline } from "react-icons/io5";

const SingleProduct = (props) => {
  return (
    <div key={props.item.id} className='shadow-lg w-75 p-6 flex flex-col justify-between gap-5 rounded-lg'>
      <div className='w-60 mx-auto h-70  '>
        <img className='w-full h-full object-cover' src={props.item.image} alt="" />
      </div>
      <div className='flex flex-col gap-4'>
        <h3 className='text-xl font-semibold'>{props.item.title}</h3>
        <h4 className='truncate'>{props.item.description}</h4>
      </div>
      <div className='flex justify-between items-center'>
        <h2 className='text-xl font-bold'>${props.item.price}</h2>
        <button className='flex items-center p-2 bg-black text-white font-semibold rounded-lg'><IoCartOutline size={30} /> Add to Cart</button>
      </div>
    </div>
  )
}

export default SingleProduct