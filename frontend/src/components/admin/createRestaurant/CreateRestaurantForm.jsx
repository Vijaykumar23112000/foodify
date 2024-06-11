import { Button, Grid } from '@mui/material'
import { useFormik } from 'formik'
import React from 'react'
import { initialValues } from './InitialValues';
import ImageField from './fields/ImageField';
import NameField from './fields/NameField';
import DescriptionField from './fields/DescriptionField';
import CuisineField from './fields/CuisineField';
import StreetAddressField from './fields/StreetAddressField';
import OpeningHoursField from './fields/OpeningHoursField';
import CityField from './fields/CityField';
import StateProvinceField from './fields/StateProvinceField';
import PostalCode from './fields/PostalCode';
import CountryField from './fields/CountryField';
import EmailField from './fields/EmailField';
import MobileField from './fields/MobileField';
import SocialMediaField from './fields/SocialMediaField';

const CreateRestaurantForm = () => {

    const formik = useFormik({
        initialValues,
        onSubmit: (values) => {
            const data = {
                name: values.name,
                description: values.description,
                cuisineType: values.cuisineType,
                address: {
                    streetAddress: values.streetAddress,
                    city: values.city,
                    stateProvince: values.stateProvince,
                    postalCode: values.postalCode,
                    country: values.country
                },
                contactInformation: {
                    email: values.email,
                    mobile: values.mobile,
                    twitter: values.twitter,
                    instagram: values.instagram,
                },
                openingHours: values.openingHours,
                images:values.images
            }
            console.log("Data from restaurant form => ",data);
        }
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
                        <NameField formik={formik} />
                        <DescriptionField formik={formik} />
                        <CuisineField formik={formik} />
                        <OpeningHoursField formik={formik} />
                        <StreetAddressField formik={formik} />
                        <CityField formik={formik} />
                        <StateProvinceField formik={formik} />
                        <PostalCode formik={formik} />
                        <CountryField formik={formik} />
                        <EmailField formik={formik} />
                        <MobileField formik={formik} />
                        <SocialMediaField formik={formik} />
                    </Grid>
                    <Button
                        variant='contained'
                        color='primary'
                        type='submit'
                    >
                        Create Restaurant
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default CreateRestaurantForm
