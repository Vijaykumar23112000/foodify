import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import { initialValues } from './InitialValues';
import ImageField from './fields/ImageField';
import NameField from './fields/NameField';
import DescriptionField from './fields/DescriptionField';
import PriceField from './fields/PriceField';
import CategoryField from './fields/CategoryField';
import { Button, Grid, Typography } from '@mui/material';
import { uploadImageToCloudinary } from '../components/cloudinary/Upload';
import IngredientsField from './fields/IngredientsField';
import VegetarianField from './fields/VegetarianField';
import SeasonalField from './fields/SeasonalField';
import { useDispatch, useSelector } from 'react-redux';
import { createMenuItemAction } from '../../redux/menu/Action';
import { getIngredientsOfRestaurantAction } from '../../redux/ingredients/Action';
import { useNavigate } from 'react-router-dom';

const CreateMenuForm = () => {

    const { restaurant, ingredients } = useSelector(store => store)
    const token = localStorage.getItem("token")
    const dispatch = useDispatch()
    const restaurantId = restaurant.usersRestaurant.id
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues,
        onSubmit: (values) => {
            values.restaurantId = 1
            dispatch(createMenuItemAction({ menu: values, token }))
            navigate("/admin/restaurant/menu")
        },
    })

    useEffect(() => {
        dispatch(getIngredientsOfRestaurantAction({ id: restaurantId, token }))
    }, [dispatch, token, restaurantId])

    const [uploadImage, setUploadImage] = useState(false)

    const handleImageChange = async (e) => {
        const file = e.target.files[0]
        setUploadImage(true)
        const image = await uploadImageToCloudinary(file)
        formik.setFieldValue("images", [...formik.values.images, image])
        setUploadImage(false)
    }

    const handleRemoveImage = (i) => {
        const updatedImages = [...formik.values.images]
        updatedImages.splice(i, 1)
        formik.setFieldValue("images", updatedImages)
    }

    const handleReset = () => formik.resetForm({ values: initialValues })

    return (
        <div className='py-10 px-5 lg:flex items-center justify-center
        min-h-screen'>
            <div className="lg:max-w-4xl">
                <Typography variant='h5' color="primary" className='text-center py-2'>Add New Menu</Typography>
                <form onSubmit={formik.handleSubmit} className='space-y-4' >
                    <Grid container spacing={2}>
                        <ImageField
                            handleImageChange={handleImageChange}
                            handleRemoveImage={handleRemoveImage}
                            formik={formik}
                            uploadImage={uploadImage}
                        />
                        <NameField formik={formik} />
                        <DescriptionField formik={formik} />
                        <PriceField formik={formik} />
                        <CategoryField formik={formik} restaurant={restaurant} />
                        <IngredientsField formik={formik} ingredients={ingredients} />
                        <VegetarianField formik={formik} />
                        <SeasonalField formik={formik} />
                    </Grid>
                    <div className="flex gap-5">
                        <Button
                            variant='contained'
                            color='primary'
                            type='submit'
                        >
                            Create
                        </Button>
                        <Button
                            variant='outlined'
                            color='primary'
                            type='reset'
                            onClick={handleReset}
                        >
                            Clear
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateMenuForm
