import { Grid } from '@mui/material'
import { useFormik } from 'formik'
import React from 'react'
import { initialValues } from './InitialValues';
import ImageField from './fields/ImageField';

const CreateRestaurantForm = () => {

    const formik = useFormik({
        initialValues,
        onSubmit: () => { }
    })

    const handleImageChange = (e) => { }

    const handleRemoveImage = (i) => { }

    return (
        <div className='py-10 px-5 lg:flex items-center justify-center
        min-h-screen'>
            <div className="lg:max-w-4xl">
                <h1 className='font-bold text-2xl text-center py-2'>Add New Restaurant Form</h1>
                <form onSubmit={formik.handleSubmit} className='space-y-4' >
                    <Grid container spacing={2}>
                        <ImageField
                            handleImageChange={handleImageChange}
                            handleRemoveImage={handleRemoveImage}
                        />
                    </Grid>
                </form>
            </div>
        </div>
    )
}

export default CreateRestaurantForm
