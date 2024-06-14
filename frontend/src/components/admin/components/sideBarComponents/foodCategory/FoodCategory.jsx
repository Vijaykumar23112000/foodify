import React from 'react'
import FoodCategoryTable from './FoodCategoryTable'
import { useSelector } from 'react-redux'

const FoodCategory = () => {

    const { restaurant } = useSelector(store => store)

    return (
        <div className='px-2 mt-5'>
            {
                restaurant.categories ? <FoodCategoryTable /> : <div>Food Categories is empty</div>
            }
        </div>
    )
}

export default FoodCategory
