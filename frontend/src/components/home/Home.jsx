import React from 'react'
import Carousel from './carousel/Carousel'
import RestaurantCard from './restaurant/RestaurantCard'
import "./home.css"

const home = () => {
    
    return (
        <div className='pb-10'>
            <section className='banner -z-50 relative flex flex-col justify-center items-center'>
                <div className="w-[50vw] z-10 text-center">
                    <p className='foodify text-2xl lg:text-6xl 
                                    font-bold z-10 py-5 
                                    lg:first-letter:text-8xl 
                                    first-letter:text-4xl
                                    first-letter:text-red-600
                                    text-gray-300'
                    >foodify</p>
                    <p className='z-10 text-gray-300 text-xl lg:text-4xl'>Savor the Flavor, Delivered to Your Door...</p>
                </div>
                <div className="cover absolute top-0 left-0 right-0">

                </div>
                <div className="fadeout">

                </div>
            </section>
            <section className='p-10 lg:py-10 px-20'>
                <p className='text-2xl font-semibold text-gray-400 py-3 pb-10'>Top Sellers</p>
                <Carousel />
            </section>
            <section className='px-5 lg:px-20 pt-10'>
                <h1 className='text-2xl font-semibold text-gray-300 pb-8'>Discover culinary bliss with our specially chosen favorites!</h1>
                <div className='flex flex-wrap items-center justify-around  gap-4'>
                    {
                        [1,1,1,1,1,1,1,1].map(item => <RestaurantCard />)
                    }
                </div>
            </section>
        </div>
    )
}

export default home