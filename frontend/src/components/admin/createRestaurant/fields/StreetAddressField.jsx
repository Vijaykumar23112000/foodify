import { Grid, TextField } from '@mui/material'
import React from 'react'

const StreetAddressField = ({ formik }) => {
    return (
        <Grid item xs={12}>
            <TextField
                fullWidth
                id='streetAddress'
                name='streetAddress'
                label="Street Address"
                variant='outlined'
                onChange={formik.handleChange}
                value={formik.values.streetAddress}
            >
            </TextField>
        </Grid>
    )
}

export default StreetAddressField
