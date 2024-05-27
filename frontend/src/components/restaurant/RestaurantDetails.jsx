import { Divider, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Typography } from '@mui/material'
import React, { useState } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MenuCard from './MenuCard';

const RestaurantDetails = () => {

    const [foodType , setFoodType] = useState("all")

    const foodCategories = ["Pizza", "Biriyani", "Burger", "Chicken", "Donut"]

    const handleFilter = (e) => {
        console.log(e.target.value , e.target.name);
    }

    const menu = [1,1,1,1,1,1,1]

    const foodTypes = [
        { label: "All", value: "all" },
        { label: "Vegetarian", value: "vegetarian" },
        { label: "Non-Vegetarian", value: "non_vegetarian" },
        { label: "Seasonal Only", value: "seasonal" }
    ]

    return (
        <div className='px-5 lg:px-20'>
            <section>
                <h3 className='text-gray-300 py-2 mt-10'>Home/india/indian fast food/3</h3>
                <div>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <img
                                className='w-full h-[40vh] object-cover'
                                src="https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt="restaurant"
                            />
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <img
                                className='w-full h-[40vh] object-cover'
                                src="https://api.deepai.org/job-view-file/78c7fe89-dafe-4d77-b633-3ce8e4393c9c/outputs/output.jpg"
                                alt="restaurant"
                            />
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <img
                                className='w-full h-[40vh] object-cover'
                                src="https://images.pexels.com/photos/20250944/pexels-photo-20250944/free-photo-of-restaurant-at-night.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt="restaurant"
                            />
                        </Grid>
                    </Grid>
                </div>
                <div className='pt-3 pb-5'>
                    <h1 className='text-4xl font-semibold'>Indian Fast Food</h1>
                    <p className='text-gray-400 mt-1'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Et autem rerum nostrum distinctio iusto assumenda culpa
                        nam consequuntur quas beatae! Quisquam quidem saepe nisi
                        dolores aliquam quaerat reiciendis asperiores voluptate.
                    </p>
                    <div className="space-y-3 mt-3">
                        <p className='text-gray-400 flex items-center gap-3'>
                            <LocationOnIcon />
                            <span>
                                Kerala , India
                            </span>
                        </p>
                        <p className='text-gray-400 flex items-center gap-3'>
                            <CalendarMonthIcon />
                            <span>
                                Mon-Sun: 9:00 AM - 9:00 PM (Today)
                            </span>
                        </p>
                    </div>
                </div>
            </section>
            <Divider />
            <section className='pt-[2rem] lg:flex relative'>
                <div className="space-y-10 lg:w-[20%] filter">
                    <div className='box space-y-5 lg:sticky top-28'>
                        <div>
                            <Typography variant='h5' sx={{ paddingBottom: "1rem" }}>
                                Food Type
                            </Typography>
                            <FormControl className='py-10 space-y-5' component={"fieldset"}>
                                <RadioGroup onChange={handleFilter} name='food_type' value={foodType}>
                                    {
                                        foodTypes.map(item => <FormControlLabel key={item.value} value={item.value} control={<Radio />} label={item.label} />)
                                    }
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <Divider />
                        <div>
                            <Typography variant='h5' sx={{ paddingBottom: "1rem" }}>
                                Food Category
                            </Typography>
                            <FormControl className='py-10 space-y-5' component={"fieldset"}>
                                <RadioGroup onChange={handleFilter} name='food_Type' value={foodType}>
                                    {
                                        foodCategories.map(item => <FormControlLabel key={item} value={item} control={<Radio />} label={item} />)
                                    }
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>
                </div>
                <div className="space-y-5 lg:w-[80%] lg:pl-10 menu">
                    {
                        menu.map(item => <MenuCard />)
                    }
                </div>
            </section>
        </div>
    )
}

export default RestaurantDetails
