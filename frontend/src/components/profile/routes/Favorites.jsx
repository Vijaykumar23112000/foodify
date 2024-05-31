import React from 'react'
import RestaurantCard from '../../home/restaurant/RestaurantCard'

const Favorites = () => {
    return (
        <div>
            <h1 className='py-5 text-xl font-semibold text-center'>My Favorites</h1>
            <div className="flex flex-wrap justify-center">
                {
                    [1,1,1,1,1].map((item)=><RestaurantCard />)
                }
            </div>
        </div>
    )
}

export default Favorites
