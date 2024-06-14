import { FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'

const CategoryField = ({ formik, restaurant }) => {
    return (
        <Grid item xs={12} lg={6}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={formik.values.category}
                    label="Category"
                    onChange={formik.handleChange}
                    name="category"
                >
                    {
                        restaurant.categories?.map((item, i) => <MenuItem key={i} value={item}>{item.name}</MenuItem>)
                    }

                </Select>
            </FormControl>
        </Grid>
    )
}

export default CategoryField
