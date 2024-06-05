import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const FavoritesEmptyCard = () => {

    const navigate = useNavigate()

    return (
        <div className="text-gray-400 pt-20">
            <p className='pb-10'>.... No Favorites Yet .... </p>
            <div className="h-[30px] flex justify-center">
                <Button color='primary' variant='contained' onClick={() => navigate("/")}>Click to add</Button>
            </div>
        </div>
    )
}

export default FavoritesEmptyCard
