import { Grid, TextField } from '@mui/material'
import React from 'react'

const CuisineField = ({ formik }) => {
    return (
        <Grid item xs={12}>
            <TextField
                fullWidth
                id='cuisineType'
                name='cuisineType'
                label="Cuisine Type"
                variant='outlined'
                onChange={formik.handleChange}
                value={formik.values.name}
            >
            </TextField>
        </Grid>
    )
}

export default CuisineField
