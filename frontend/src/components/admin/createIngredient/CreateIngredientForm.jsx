import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createIngredientAction } from '../../redux/ingredients/Action'

const CreateIngredientForm = ({ handleClose }) => {

    const dispatch = useDispatch()
    const token = localStorage.getItem("token")
    const { restaurant, ingredients } = useSelector(store => store)

    const [formData, setFormData] = useState({
        name: "",
        categoryId: ""
    })

    const handleSubmit = e => {
        e.preventDefault()
        const data = {
            ...formData,
            restaurantId: restaurant.usersRestaurant.id
        }
        dispatch(createIngredientAction({ ingredientData: data, token }))
        handleClose()
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    return (
        <div className=''>
            <div className="p-5">
                <Typography variant='h5' color="primary" className='text-center pb-10'>Create Ingredient</Typography>
                <form className='space-y-4' onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        id='name'
                        name='name'
                        label="Ingredient Name"
                        variant='outlined'
                        onChange={handleInputChange}
                        value={formData.name}
                    >
                    </TextField>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Category</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={formData.categoryId}
                            label="Category"
                            onChange={handleInputChange}
                            name="categoryId"
                        >
                            {
                                ingredients.category.map((item, i) => <MenuItem key={i} value={item.id}>{item.name}</MenuItem>)
                            }
                        </Select>
                    </FormControl>
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

export default CreateIngredientForm
