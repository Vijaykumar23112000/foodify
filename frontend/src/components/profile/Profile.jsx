import React, { useState } from 'react'
import ProfileNavigation from './ProfileNavigation'
import { Route, Routes } from 'react-router-dom'
import UserProfile from './routes/UserProfile'
import Orders from './routes/Orders'
import Address from './routes/Address'
import Favorites from './routes/Favorites'
import Payment from './routes/Payment'
import Notification from './routes/Notification'
import Events from './routes/Events'
import Logout from './routes/Logout'

const Profile = () => {

    const [openSideBar, setOpenSideBar] = useState(false)

    return (
        <div className='lg:flex justify-between'>
            <div className="sticky h-[80vh] lg:w-[20%]">
                <ProfileNavigation open={openSideBar} />
            </div>
            <div className="lg:w-[80%]">
                <Routes>
                    <Route path='/' element={<UserProfile />} />
                    <Route path='/orders' element={<Orders />} />
                    <Route path='/address' element={<Address />} />
                    <Route path='/favorites' element={<Favorites />} />
                    <Route path='/payment' element={<Payment />} />
                    <Route path='/notification' element={<Notification />} />
                    <Route path='/events' element={<Events />} />
                    <Route path='/logout' element={<Logout />} />
                </Routes>
            </div>
        </div>
    )
}

export default Profile
