import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CreateRestaurantForm from '../admin/createRestaurant/CreateRestaurantForm'
import Admin from '../admin/adminPage/Admin'
import { useSelector } from 'react-redux'

const AdminRouter = () => {

    const { restaurant } = useSelector(store => store)

    return (
        <div>
            <Routes>
                <Route path="/*" element={!restaurant.usersRestaurant ? <CreateRestaurantForm /> : <Admin />} />
            </Routes>
        </div>
    )
}

export default AdminRouter
