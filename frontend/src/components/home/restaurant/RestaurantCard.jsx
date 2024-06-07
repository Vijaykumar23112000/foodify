import { Card, Chip, IconButton } from '@mui/material'
import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavoriteAction } from '../../redux/authentication/Action';

const RestaurantCard = ({ item }) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const token = localStorage.getItem("token")
    const { authentication } = useSelector(store => store)

    const handleAddToFavorite = () => dispatch(addToFavoriteAction({ restaurantId: item.id, token }))

    const handleNavigateToRestaurant = () => { if (item.open) navigate(`/restaurant/${item.address.city}/${item.name}/${item.id}`) }

    const isPresentInFavorites = (favorites, restaurant) => favorites.find(item => item.id === restaurant.id) !== undefined

    return (
        <Card className='m-5 w-[18rem]'>
            <div className={`${true ? 'cursor-pointer' : 'cursor-not-allowed'} relative`}>
                <img
                    className='w-full h-[10rem] rounded-t-md object-cover'
                    src={item.images[1]}
                    alt='Restaurant'
                />
                <Chip
                    size='small'
                    className='absolute top-2 left-2'
                    color={item.open ? "success" : "error"}
                    label={item.open ? "open" : "closed"}
                />
            </div>
            <div className='p-4 textPart lg:flex w-full justify-between'>
                <div className='space-y-1'>
                    <p onClick={handleNavigateToRestaurant} className='font-semibold text-lg cursor-pointer'>{item.name}</p>
                    <p className='text-gray-300 text-sm'>{item.description}</p>
                </div>
                <div>
                    <IconButton onClick={handleAddToFavorite}>
                        {
                            isPresentInFavorites(authentication.favorites, item) ? <FavoriteIcon color='primary' /> : <FavoriteBorderIcon />
                        }
                    </IconButton>
                </div>
            </div>
        </Card>
    )
}

export default RestaurantCard
