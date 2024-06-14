import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createIngredientCategoryAction } from '../../redux/ingredients/Action'

const CreateIngredientCategoryForm = ({ handleClose }) => {

    const dispatch = useDispatch()
    const token = localStorage.getItem("token")
    const { restaurant } = useSelector(store => store)

    const [formData, setFormData] = useState({
        name: "",
        restaurantId: ""
    })

    const handleSubmit = e => {
        e.preventDefault()
        const data = {name: formData.name , restaurantId: restaurant.usersRestaurant?.id}
        dispatch(createIngredientCategoryAction({ ingredientCategoryData: data, token }))
        handleClose()
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className=''>
            <div className="p-5">
                <Typography variant='h5' color="primary" className='text-center pb-10'>Create Ingredient Category</Typography>
                <form className='space-y-4' onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        id='name'
                        name='name'
                        label="Category"
                        variant='outlined'
                        onChange={handleInputChange}
                        value={formData.name}
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

export default CreateIngredientCategoryForm
