import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminRouter from './AdminRouter'
import UserRouter from './UserRouter'

const Router = () => {
    return (
        <Routes>
            <Route path='/admin/restaurant/*' element={<AdminRouter />} />
            <Route path='/*' element={<UserRouter />} />
        </Routes>
    )
}

export default Router
