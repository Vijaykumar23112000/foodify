import { Grid, TextField } from '@mui/material'
import React from 'react'

const MobileField = ({ formik }) => {
    return (
        <Grid item xs={12} lg={5}>
            <TextField
                fullWidth
                id='mobile'
                name='mobile'
                label="Mobile"
                variant='outlined'
                onChange={formik.handleChange}
                value={formik.values.mobile}
            >
            </TextField>
        </Grid>
    )
}

export default MobileField
