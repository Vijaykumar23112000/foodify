import { Grid, TextField } from '@mui/material'
import React from 'react'

const CountryField = ({ formik }) => {
    return (
        <Grid item xs={12} >
            <TextField
                fullWidth
                id='country'
                name='country'
                label="Country"
                variant='outlined'
                onChange={formik.handleChange}
                value={formik.values.country}
            >
            </TextField>
        </Grid>
    )
}

export default CountryField
