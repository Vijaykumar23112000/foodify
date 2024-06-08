import React from 'react'
import RestaurantCard from '../../home/restaurant/RestaurantCard'
import { useSelector } from 'react-redux'
import FavoritesEmptyCard from './Card/FavoritesEmptyCard'

const Favorites = () => {

    const { authentication } = useSelector(store => store)

    return (
        <div>
            <h1 className='py-5 text-xl font-semibold text-center'>My Favorites</h1>
            <div className="flex flex-wrap justify-center">
                {
                    authentication.favorites.length === 0 ? <FavoritesEmptyCard /> : authentication.favorites.map((item, i) => <RestaurantCard key={i} item={item} />)
                }
            </div>
        </div>
    )
}

export default Favorites
