import { Grid, TextField } from '@mui/material'
import React from 'react'

const PostalCode = ({ formik }) => {
    return (
        <Grid item xs={12} lg={4}>
            <TextField
                fullWidth
                id='postalCode'
                name='postalCode'
                label="Postal Code"
                variant='outlined'
                onChange={formik.handleChange}
                value={formik.values.name}
            >
            </TextField>
        </Grid>
    )
}

export default PostalCode
