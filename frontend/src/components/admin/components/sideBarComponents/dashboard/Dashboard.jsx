import { Button, Grid } from '@mui/material'
import React from 'react'
import MenuTable from '../menu/MenuTable'
import OrderTable from '../orders/OrderTable'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleteRestaurantAction } from '../../../../redux/restaurant/Action'

const Dashboard = () => {

    const { restaurant } = useSelector(store => store)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const token = localStorage.getItem("token")

    const handleDeleteRestaurant = () => {
        dispatch(deleteRestaurantAction({ restaurantId: restaurant.usersRestaurant.id, token }))
        navigate("/admin/restaurant")
    }

    return (
        <div>
            <div className="py-5 flex flex-col justify-center items-center gap-5" >
                <h1 className='text-2xl lg:text-4xl text-center font-bold p-5'>{restaurant?.usersRestaurant.name}</h1>
                <Button variant='outlined' size='small' onClick={handleDeleteRestaurant}>
                    Delete Restaurant
                </Button>
            </div>
            <Grid container spacing={2} sx={{ padding: "2rem" }}>
                <Grid item xs={12} lg={12}>
                    <MenuTable />
                </Grid>
                <Grid item xs={12} lg={12}>
                    <OrderTable />
                </Grid>
            </Grid>
        </div>
    )
}

export default Dashboard
