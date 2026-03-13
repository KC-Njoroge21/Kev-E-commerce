import React from 'react'
import SignIn from './pages/SignIn'
import Products from './pages/Products'
import {Routes, Route} from "react-router-dom"
import { useSelector } from 'react-redux'

const App = () => {

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)

  return (
    <div>
      <Routes>
        <Route path='/' element={isLoggedIn ? <Products /> : <SignIn />} />
      </Routes>

    </div>
  )
}

export default App