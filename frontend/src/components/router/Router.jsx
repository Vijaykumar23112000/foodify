import React from 'react'
import Navbar from '../navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from '../home/Home'
import RestaurantDetails from '../restaurant/RestaurantDetails'
import Cart from '../cart/Cart'
import Profile from '../profile/Profile'
import Authentication from '../authentication/Authentication'

const Router = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/account/:register' element={<Home />} />
                <Route path='/restaurant/:city/:title/:id' element={<RestaurantDetails />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/my-profile/*' element={<Profile />} />
            </Routes>
            <Authentication />
        </div>
    )
}

export default Router
