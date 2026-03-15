import React from 'react'
import { FaGoogle } from "react-icons/fa";
import { GrApple } from "react-icons/gr";
import { BsBagCheckFill } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import authSlice from '../store/authSlice';

const SignIn = () => {

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(authSlice.actions.logIn())


  }

  return (
    <section>
      <div className='flex flex-col gap-5 items-center p-6'>
        <div><BsBagCheckFill size={40} /></div>

        <div className='flex flex-col gap-2'>
          <h1 className='text-3xl font-semibold'>Welcome Back</h1>
          <h4>Sign in to continue shopping</h4>
        </div>

        <form className='p-6 w-1/3 min-w-75 shadow flex flex-col gap-5' onSubmit={handleSubmit}  action="">
          <div className='flex flex-col'>
            <label className='font-semibold' htmlFor="">Email Adress</label>
            <input className='p-2 bg-gray-200 rounded-lg' required={true} type="email" placeholder='you@example.com' />
          </div>

          <div className='flex flex-col'>
            <label htmlFor="">Password</label>
            <input className='p-2 bg-gray-200 rounded-lg' required={true} type="password" placeholder='Enter our password' />
          </div>

          <div className='flex gap-4'>
            <input type="checkbox" />
            <label htmlFor="">Remember me for 30 days</label>
          </div>

          
            <button className='p-2 bg-black text-white w-full rounded-lg font-semibold'>Sign In</button>

            
        <div>
          <p>Or continue with</p>
        </div>

        <div className='flex gap-3'>
          <button className='w-full border rounded-lg flex items-center justify-center font-semibold p-2 gap-4 border-gray-200'><FaGoogle size={20} /> Google</button>
          <button className='w-full border rounded-lg flex items-center font-semibold justify-center gap-4 p-2 border-gray-200'><GrApple size={20} /> Apple</button>
        </div>

        <h2>
          Don't have an acoount? <span className='font-semibold hover:underline'>Sign up for free</span>
        </h2>
        
        </form>

      </div>
    </section>
  )
}

export default SignIn