import { Grid, TextField } from '@mui/material'
import React from 'react'

const DescriptionField = ({ formik }) => {
    return (
        <Grid item xs={12}>
            <TextField
                fullWidth
                id='description'
                name='description'
                label="Description"
                variant='outlined'
                onChange={formik.handleChange}
                value={formik.values.description}
            >
            </TextField>
        </Grid>
    )
}

export default DescriptionField
