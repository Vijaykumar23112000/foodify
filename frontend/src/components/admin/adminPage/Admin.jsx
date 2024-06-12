import React from 'react'
import AdminSideBar from '../components/dashboardSidebar/AdminSideBar'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../components/sideBarComponents/dashboard/Dashboard'
import Orders from '../components/sideBarComponents/orders/Orders'
import Menu from '../components/sideBarComponents/menu/Menu'
import FoodCategory from '../components/sideBarComponents/foodCategory/FoodCategory'
import Ingredients from '../components/sideBarComponents/ingredients/Ingredients'
import Events from '../components/sideBarComponents/events/Events'
import RestaurantDetails from '../components/sideBarComponents/restaurantDetails/RestaurantDetails'
import CreateMenuForm from '../createMenu/CreateMenuForm'

const Admin = () => {

    const handleClose = () => {

    }

    return (
        <div>
            <div className="lg:flex justify-between">
                <div>
                    <AdminSideBar handleClose={handleClose} />
                </div>
                <div className="lg:w-[80%]">
                    <Routes>
                        <Route path='/' element={<Dashboard />} />
                        <Route path='/orders' element={<Orders />} />
                        <Route path='/menu' element={<Menu />} />
                        <Route path='/category' element={<FoodCategory />} />
                        <Route path='/ingredients' element={<Ingredients />} />
                        <Route path='/events' element={<Events />} />
                        <Route path='/details' element={<RestaurantDetails />} />
                        <Route path='/add-menu' element={<CreateMenuForm />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default Admin
