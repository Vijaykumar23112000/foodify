import { Grid, TextField } from '@mui/material'
import React from 'react'

const EmailField = ({ formik }) => {
    return (
        <Grid item xs={12} lg={7}>
            <TextField
                fullWidth
                id='email'
                name='email'
                label="Email"
                variant='outlined'
                onChange={formik.handleChange}
                value={formik.values.email}
            >
            </TextField>
        </Grid>
    )
}

export default EmailField
