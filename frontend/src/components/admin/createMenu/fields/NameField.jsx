import { Grid, TextField } from '@mui/material'
import React from 'react'

const NameField = ({ formik }) => {
    return (
        <Grid item xs={12}>
            <TextField
                fullWidth
                id='name'
                name='name'
                label="Name"
                variant='outlined'
                onChange={formik.handleChange}
                value={formik.values.name}
            >
            </TextField>
        </Grid>
    )
}

export default NameField
