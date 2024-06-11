import { Grid, TextField } from '@mui/material'
import React from 'react'

const CityField = ({ formik }) => {
    return (
        <Grid item xs={12} lg={4}>
            <TextField
                fullWidth
                id='city'
                name='city'
                label="City"
                variant='outlined'
                onChange={formik.handleChange}
                value={formik.values.name}
            >
            </TextField>
        </Grid>
    )
}

export default CityField
