import { Divider, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MenuCard from './MenuCard';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getRestaurantByIdAction, getRestaurantCategoryAction } from '../redux/restaurant/Action';
import { getMenuItemsByRestaurantIdAction } from '../redux/menu/Action';

const RestaurantDetails = () => {

    const foodTypes = [
        { id: 1, label: "All", value: "all" },
        { id: 3, label: "Vegetarian", value: "isVegetarian" },
        { id: 3, label: "Non-Vegetarian", value: "isNonVeg" },
        { id: 4, label: "Seasonal Only", value: "isSeasonal" }
    ]

    const handleFilterFoodType = e => {
        setFoodType(e.target.value)
        console.log(e.target.value, e.target.name);
    }

    const handleFilterCategory = (e, value) => {
        setSelectedCategory(value)
        console.log(e.target.value, e.target.name, value);
    }

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const token = localStorage.getItem("token")
    const { authentication, restaurant, menu } = useSelector(store => store)
    const [selectedCategory, setSelectedCategory] = useState("")
    const [foodType, setFoodType] = useState("all")

    const { id } = useParams()

    useEffect(() => {
        dispatch(getRestaurantByIdAction({ token, restaurantId: id }))
        dispatch(getRestaurantCategoryAction({ restaurantId: id, token }))
    }, [])

    useEffect(() => {
        dispatch(getMenuItemsByRestaurantIdAction({ restaurantId: id, token, isVegetarian: foodType === "isVegetarian", isNonVeg: foodType === "isNonVeg", isSeasonal: foodType === "isSeasonal", foodCategory: selectedCategory }))
    }, [selectedCategory, foodType])

    console.log("restaurant : => ", restaurant)

    return (
        <div className='px-5 lg:px-20'>
            <section>
                <h3 className='text-gray-300 py-2 mt-10'>Home/india/indian fast food/3</h3>
                <div>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <img
                                className='w-full h-[40vh] object-cover'
                                src={restaurant.restaurant?.images[0]}
                                alt="restaurant"
                            />
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <img
                                className='w-full h-[40vh] object-cover'
                                src={restaurant.restaurant?.images[1]}
                                alt="restaurant"
                            />
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <img
                                className='w-full h-[40vh] object-cover'
                                src={restaurant.restaurant?.images[2]}
                                alt="restaurant"
                            />
                        </Grid>
                    </Grid>
                </div>
                <div className='pt-3 pb-5'>
                    <Typography variant='h3' className='font-semibold' color="primary">{restaurant.restaurant?.name}</Typography>
                    <p className='text-gray-400 mt-1'>{restaurant.restaurant?.description}</p>
                    <div className="space-y-3 mt-3">
                        <p className='text-gray-400 flex items-center gap-3'>
                            <LocationOnIcon />
                            <span>
                                {restaurant.restaurant?.address.streetAddress} , {restaurant.restaurant?.address.stateProvince}
                            </span>
                        </p>
                        <p className='text-gray-400 flex items-center gap-3'>
                            <CalendarMonthIcon />
                            <span>
                                {restaurant.restaurant?.openingHours}
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
                            <FormControl className='py-10 space-y-5' component={"fieldset"}>
                                <FormLabel>
                                    <Typography variant='h5' sx={{ paddingBottom: "1rem" }}>Food Type</Typography>
                                </FormLabel>
                                <RadioGroup onChange={handleFilterFoodType} name='food_type' value={foodType}>
                                    {
                                        foodTypes.map(item => <FormControlLabel key={item.value} value={item.value} control={<Radio />} label={item.label} />)
                                    }
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <Divider />
                        <div>
                            <FormControl className='py-10 space-y-5' component={"fieldset"}>
                                <FormLabel>
                                    <Typography variant='h5' sx={{ paddingBottom: "1rem" }}>Food Category</Typography>
                                </FormLabel>
                                <RadioGroup onChange={handleFilterCategory} name='food_category' value={selectedCategory}>
                                    {
                                        restaurant.categories.map(item => <FormControlLabel key={item.id} value={item.name} control={<Radio />} label={item.name} />)
                                    }
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>
                </div>
                <div className="space-y-5 lg:w-[80%] lg:pl-10 menu">
                    {
                        menu.menuItems.map(item => <MenuCard item={item} />)
                    }
                </div>
            </section>
        </div>
    )
}

export default RestaurantDetails
