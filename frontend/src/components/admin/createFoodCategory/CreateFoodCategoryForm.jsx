import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const CreateFoodCategoryForm = () => {

    const [formData, setFormData] = useState({
        categoryName: "",
        restaurantId: ""
    })

    const handleSubmit = () => {
        const data = {
            name: formData.categoryName,
            restaurantId: {
                id: 1
            }
        }
        console.log(data)
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
