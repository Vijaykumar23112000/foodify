import { Grid, TextField } from '@mui/material'
import React from 'react'

const StateProvinceField = ({ formik }) => {
    return (
        <Grid item xs={12} lg={4}>
            <TextField
                fullWidth
                id='stateProvince'
                name='stateProvince'
                label="State"
                variant='outlined'
                onChange={formik.handleChange}
                value={formik.values.name}
            >
            </TextField>
        </Grid>
    )
}

export default StateProvinceField
