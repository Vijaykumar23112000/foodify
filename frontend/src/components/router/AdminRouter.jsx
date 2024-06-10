import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CreateRestaurantForm from '../admin/createRestaurant/CreateRestaurantForm'
import Admin from '../admin/adminPage/Admin'

const AdminRouter = () => {
    return (
        <div>
            <Routes>
                <Route path="/*" element={false?<CreateRestaurantForm /> : <Admin />} />
            </Routes>
        </div>
    )
}

export default AdminRouter
