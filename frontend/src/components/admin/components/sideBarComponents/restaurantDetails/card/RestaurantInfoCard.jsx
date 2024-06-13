import { Card, CardContent, CardHeader, Grid } from '@mui/material'
import React from 'react'

const RestaurantInfoCard = ({ restaurant }) => {

    return (
        <Grid item xs={12} >
            <Card>
                <CardHeader
                    title={
                        <span className='text-gray-300' >Restaurant</span>
                    }
                />
                <CardContent>
                    <div className="space-y-4 text-gray-200">
                        <div className="flex">
                            <p className='w-48'>Owner</p>
                            <p className='w-48 text-gray-400'>
                                <span className='pr-5'>-</span>
                                { restaurant?.usersRestaurant?.owner.fullName}
                            </p>
                        </div>
                        <div className="flex">
                            <p className='w-48'>Restaurant Name</p>
                            <p className='w-48 text-gray-400'>
                                <span className='pr-5'>-</span>
                                {restaurant?.usersRestaurant?.name}
                            </p>
                        </div>
                        <div className="flex">
                            <p className='w-48'>Cuisine Type</p>
                            <p className='w-48 text-gray-400'>
                                <span className='pr-5'>-</span>
                                {restaurant?.usersRestaurant?.cuisineType}
                            </p>
                        </div>
                        <div className="flex">
                            <p className='w-48'>Opening Hours</p>
                            <p className='w-98 text-gray-400'>
                                <span className='pr-5'>-</span>
                                <span>{restaurant?.usersRestaurant?.openingHours}</span>
                            </p>
                        </div>
                        <div className="flex">
                            <p className='w-48'>Status</p>
                            <p className='w-48 text-gray-400'>
                                <span className='pr-5'>-</span>
                                {
                                    restaurant?.usersRestaurant?.open ? <span className='px-5 py-2 rounded-full bg-green-400 text-gray-950'>Open</span> :
                                        <span className='px-5 py-2 rounded-full bg-red-400 text-gray-950'>Closed</span>
                                }
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default RestaurantInfoCard
