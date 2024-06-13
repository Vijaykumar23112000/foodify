import { Button, Grid } from '@mui/material'
import React from 'react'
import RestaurantInfoCard from './card/RestaurantInfoCard'
import AddressCard from './card/AddressCard'
import ContactInfoCard from './card/ContactInfoCard'
import { useDispatch, useSelector } from 'react-redux'
import { updateRestaurantStatusAction } from '../../../../redux/restaurant/Action'

const RestaurantDetails = () => {

    const { restaurant } = useSelector(store => store)
    const dispatch = useDispatch()

    const handleRestaurantStatus = () => dispatch(updateRestaurantStatusAction({ restaurantId: restaurant.usersRestaurant.id, token: localStorage.getItem("token") }))

    return (
        <div className='lg:px-20 px-5 pb-10'>
            <div className="py-5 flex justify-center items-center gap-5">
                <h1 className='text-2xl lg:text-7xl text-center font-bold p-5'>{restaurant?.usersRestaurant.name}</h1>
                <div className="">
                    <Button
                        onClick={handleRestaurantStatus}
                        size='large'
                        variant='contained'
                        className='py-[1rem] px-[2rem]'
                        color={!restaurant.usersRestaurant?.open ? "success" : "error"}
                    >
                        {restaurant.usersRestaurant?.open ? "Close" : "Open"}
                    </Button>
                </div>
            </div>
            <Grid container spacing={2} >
                <RestaurantInfoCard restaurant={restaurant} />
                <AddressCard restaurant={restaurant} />
                <ContactInfoCard restaurant={restaurant} />
            </Grid>
        </div>
    )
}

export default RestaurantDetails
