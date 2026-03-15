import React from 'react'
import SignIn from './pages/SignIn'
import Products from './pages/Products'
import {Routes, Route} from "react-router-dom"
import { useSelector } from 'react-redux'
import Cart from './pages/Cart'

const App = () => {

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)

   const cartItems = useSelector(state => state.cart.cartItems)

    console.log(cartItems)

  return (
    <div>
      <Routes>
        <Route path='/' element={isLoggedIn ? <Products /> : <SignIn />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>

    </div>
  )
}

export default App