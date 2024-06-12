import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const CreateIngredientForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        ingredientCategoryId: ""
    })

    const handleSubmit = () => {
        const data = {
            name: formData.name,
            ingredientCategoryId: {
                id: 1
            }
        }
        console.log(data)
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
                        label="Category Name"
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
                            value={formData.ingredientCategoryId}
                            label="Category"
                            onChange={handleInputChange}
                            name="ingredientCategoryId"
                        >
                            <MenuItem value={"Bread"}>Bread</MenuItem>
                            <MenuItem value={"Tomato"}>Tomato</MenuItem>
                            <MenuItem value={"Pickle"}>Pickle</MenuItem>
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
