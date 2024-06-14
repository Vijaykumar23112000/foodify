import { FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'

const VegetarianField = ({ formik }) => {
    return (
        <Grid item xs={12} lg={6}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Is Vegetarian</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={formik.values.isVegetarian}
                    label="Is Vegetarian"
                    onChange={formik.handleChange}
                    name="isVegetarian"
                >
                    <MenuItem value={true}>Yes</MenuItem>
                    <MenuItem value={false}>No</MenuItem>
                </Select>
            </FormControl>
        </Grid>
    )
}

export default VegetarianField
