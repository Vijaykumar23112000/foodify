import { Grid, TextField } from '@mui/material'
import React from 'react'

const OpeningHoursField = ({ formik }) => {
    return (
        <Grid item xs={12}>
            <TextField
                fullWidth
                id='openingHours'
                name='openingHours'
                label="Opening Hours"
                variant='outlined'
                onChange={formik.handleChange}
                value={formik.values.name}
            >
            </TextField>
        </Grid>
    )
}

export default OpeningHoursField
