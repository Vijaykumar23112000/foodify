import { Button, Grid } from '@mui/material'
import React from 'react'
import RestaurantInfoCard from './card/RestaurantInfoCard'
import AddressCard from './card/AddressCard'
import ContactInfoCard from './card/ContactInfoCard'

const RestaurantDetails = () => {

    const handleRestaurantStatus = () => { }

    return (
        <div className='lg:px-20 px-5 pb-10'>
            <div className="py-5 flex justify-center items-center gap-5">
                <h1 className='text-2xl lg:text-7xl text-center font-bold p-5'>Rapsy Restaurant</h1>
                <div className="">
                    <Button
                        onClick={handleRestaurantStatus}
                        size='large'
                        variant='contained'
                        className='py-[1rem] px-[2rem]'
                        color={true ? "primary" : "error"}
                    >
                        {true ? "Close" : "Open"}
                    </Button>
                </div>
            </div>
            <Grid container spacing={2} >
                <RestaurantInfoCard />
                <AddressCard />
                <ContactInfoCard />
            </Grid>
        </div>
    )
}

export default RestaurantDetails
