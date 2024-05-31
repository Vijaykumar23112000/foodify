import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import { Field, Form, Formik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const RegistrationForm = () => {

    const handleSubmit = (values) => {
        console.log(values)
    }

    const intialValues = {
        fullName: "",
        email: "",
        password: "",
        role: "ROLE_CUSTOMER"
    }

    const navigate = useNavigate()

    return (
        <div>
            <Typography variant='h5' className='text-center'>
                Register
            </Typography>
            <Formik
                initialValues={intialValues}
                onSubmit={handleSubmit}
            >
                <Form>
                    <Field
                        as={TextField}
                        name="fullName"
                        label="Full Name"
                        fullWidth
                        variant="outlined"
                        margin="normal"
                    />
                    <Field
                        as={TextField}
                        name="email"
                        label="E-mail"
                        fullWidth
                        variant="outlined"
                        margin="normal"
                    />
                    <Field
                        as={TextField}
                        name="password"
                        label="Password"
                        fullWidth
                        variant="outlined"
                        margin="normal"
                        type="password"
                    />
                    <FormControl fullWidth margin="normal">
                        <InputLabel id="role-simple-select-label">Role</InputLabel>
                        <Field
                            as={Select}
                            labelId="role-simple-select-label"
                            id="role-simple-select"
                            label="Role"
                            name="role"
                        >
                            <MenuItem value={"ROLE_CUSTOMER"}>Customer</MenuItem>
                            <MenuItem value={"ROLE_RESTAURANT-OWNER"}>Restaurant Owner</MenuItem>
                        </Field>
                    </FormControl>
                    <Button
                        sx={{ marginTop: 2, padding: "1rem" }}
                        fullWidth
                        type='submit'
                        variant='contained'
                    >
                        Register
                    </Button>
                </Form>
            </Formik>
            <Typography variant='body2' align='center' sx={{ marginTop: 3 }}>
                If Have An Account Already ?
                <Button size='small' onClick={() => navigate("/account/login")}>Login</Button>
            </Typography>
        </div>
    )
}

export default RegistrationForm
