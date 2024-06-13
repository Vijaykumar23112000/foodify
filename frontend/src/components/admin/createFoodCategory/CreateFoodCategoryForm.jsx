import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createCategoryAction } from '../../redux/restaurant/Action'

const CreateFoodCategoryForm = () => {

    const { restaurant } = useSelector(store => store)
    const dispatch = useDispatch()

    const [formData, setFormData] = useState({
        categoryName: "",
        restaurantId: ""
    })

    const handleSubmit = e => {
        e.preventDefault()
        const data = {
            name: formData.categoryName,
            restaurantId: {
                id: restaurant.usersRestaurant?.id
            }
        }
        dispatch(createCategoryAction({ requestData: data, token: localStorage.getItem("token") }))
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className=''>
            <div className="p-5">
                <Typography variant='h5' color="primary" className='text-center pb-10'>Create Food Category</Typography>
                <form className='space-y-4' onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        id='categoryName'
                        name='categoryName'
                        label="Category Name"
                        variant='outlined'
                        onChange={handleInputChange}
                        value={formData.categoryName}
                    />
                    <Button
                        variant='contained'
                        color='primary'
                        type='submit'
                    >
                        Create
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default CreateFoodCategoryForm
