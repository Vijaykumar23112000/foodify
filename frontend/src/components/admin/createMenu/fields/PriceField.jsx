import { Grid, TextField } from '@mui/material'
import React from 'react'

const PriceField = ({ formik }) => {
    return (
        <Grid item xs={12} lg={6}>
            <TextField
                fullWidth
                id='price'
                name='price'
                label="Price"
                variant='outlined'
                onChange={formik.handleChange}
                value={formik.values.price}
            >
            </TextField>
        </Grid>
    )
}

export default PriceField
