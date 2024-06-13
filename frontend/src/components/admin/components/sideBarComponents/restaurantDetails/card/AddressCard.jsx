import { Card, CardContent, CardHeader, Grid } from '@mui/material'
import React from 'react'

const AddressCard = ({ restaurant }) => {

    return (
        <Grid item xs={12} lg={6} >
            <Card>
                <CardHeader
                    title={
                        <span className='text-gray-300' >Address</span>
                    }
                />
                <CardContent>
                    <div className="space-y-4 text-gray-200">
                        <div className="flex">
                            <p className='w-48'>Country</p>
                            <p className='w-48 text-gray-400'>
                                <span className='pr-5'>-</span>
                                {restaurant?.usersRestaurant?.address.country}
                            </p>
                        </div>
                        <div className="flex">
                            <p className='w-48'>City</p>
                            <p className='w-48 text-gray-400'>
                                <span className='pr-5'>-</span>
                                {restaurant?.usersRestaurant?.address.city}
                            </p>
                        </div>
                        <div className="flex">
                            <p className='w-48'>Postal Code</p>
                            <p className='w-48 text-gray-400'>
                                <span className='pr-5'>-</span>
                                {restaurant?.usersRestaurant?.address.postalCode}
                            </p>
                        </div>
                        <div className="flex">
                            <p className='w-48'>Street Address</p>
                            <p className='w-48 text-gray-400'>
                                <span className='pr-5'>-</span>
                                {restaurant?.usersRestaurant?.address.streetAddress}
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default AddressCard
