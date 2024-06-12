import { Button, Grid, TextField } from '@mui/material';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import React, { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

const CreateEventForm = () => {

    const intialValues = {
        image: "",
        location: "",
        name: "",
        startedAt: null,
        endsAt: null
    }

    const [formValues, setFormValues] = useState(intialValues);

    const handleFormChanged = e => setFormValues({ ...formValues, [e.target.name]: e.target.value })

    const handleDateChange = (date, dateType) => setFormValues({ ...formValues, [dateType]: date })

    const handleSubmit = (e) => {
        e.preventDefault();
        const formattedFormValues = {
            ...formValues,
            startedAt: formValues.startedAt ? dayjs(formValues.startedAt).format("MMMM DD, YYYY hh:mm A") : null,
            endsAt: formValues.endsAt ? dayjs(formValues.endsAt).format("MMMM DD, YYYY hh:mm A") : null
        };
        console.log("Form submitted:", formattedFormValues);
    };

    const handleReset = () => setFormValues(intialValues)

    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        name='image'
                        label="Image URL"
                        variant="outlined"
                        fullWidth
                        value={formValues.image}
                        onChange={handleFormChanged}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        name='name'
                        label="Name"
                        variant="outlined"
                        fullWidth
                        value={formValues.name}
                        onChange={handleFormChanged}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        name='location'
                        label="Location"
                        variant="outlined"
                        fullWidth
                        value={formValues.location}
                        onChange={handleFormChanged}
                    />
                </Grid>
                <Grid item xs={12}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateTimePicker
                            renderInput={(props) => <TextField {...props} />}
                            label="Start Date And Time"
                            value={formValues.startedAt}
                            onChange={(newValue) => handleDateChange(newValue, "startedAt")}
                            inputFormat="YYYY-MM-DD HH:mm:ss"
                            className='w-full'
                            sx={{ width: "100%" }}
                        />
                    </LocalizationProvider>
                </Grid>
                <Grid item xs={12}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateTimePicker
                            renderInput={(props) => <TextField {...props} />}
                            label="End Date And Time"
                            value={formValues.endsAt}
                            onChange={(newValue) => handleDateChange(newValue, "endsAt")}
                            inputFormat="YYYY-MM-DD HH:mm:ss"
                            className='w-full'
                            sx={{ width: "100%" }}
                        />
                    </LocalizationProvider>
                </Grid>
                <Grid item xs={6}>
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Submit
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Button type="button" onClick={handleReset} variant="outlined" color="primary" fullWidth>
                        Clear
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default CreateEventForm;
