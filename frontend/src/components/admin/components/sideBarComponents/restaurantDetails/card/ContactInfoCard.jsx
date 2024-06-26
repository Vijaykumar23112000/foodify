import { Card, CardContent, CardHeader, Grid } from '@mui/material'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const ContactInfoCard = ({ restaurant }) => {

    return (
        <Grid item xs={12} lg={6} >
            <Card>
                <CardHeader
                    title={
                        <span className='text-gray-300' >Contact Information</span>
                    }
                />
                <CardContent>
                    <div className="space-y-4 text-gray-200">
                        <div className="flex">
                            <p className='w-48'>Email</p>
                            <p className='w-48 text-gray-400'>
                                <span className='pr-5'>-</span>
                                {restaurant?.usersRestaurant?.contactInformation?.email}
                            </p>
                        </div>
                        <div className="flex">
                            <p className='w-48'>Mobile</p>
                            <p className='w-48 text-gray-400'>
                                <span className='pr-5'>-</span>
                                {restaurant?.usersRestaurant?.contactInformation?.mobile}
                            </p>
                        </div>
                        <div className="flex">
                            <p className='w-48'>Social</p>
                            <div className='flex text-gray-400 items-center pb-3 gap-2'>
                                <span className='pr-5'>-</span>
                                <a href={restaurant?.usersRestaurant?.contactInformation?.instagram}>
                                    <InstagramIcon sx={{ fontSize: "2rem" }} />
                                </a>
                                <a href={restaurant?.usersRestaurant?.contactInformation?.twitter}>
                                    <TwitterIcon sx={{ fontSize: "2rem" }} />
                                </a>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default ContactInfoCard
