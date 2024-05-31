import { Button, TextField, Typography } from '@mui/material'
import { Field, Form, Formik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {

    const initialValues = {
        email:"",
        password:""
    }

    const handleSubmit = () => {

    }

    const navigate = useNavigate()

    return (
        <div>
            <Typography variant='h5' className='text-center'>
                Login
            </Typography>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
            >
                <Form>
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
                    <Button 
                        sx={{marginTop:2 , padding:"1rem"}}
                        fullWidth 
                        type='submit' 
                        variant='contained'
                    >
                        Login
                    </Button>
                </Form>
            </Formik>
            <Typography variant='body2' align='center' sx={{marginTop:3}}>
                Dont Have An Account ?
                <Button size='small' onClick={()=>navigate("/account/register")}>Register</Button>    
            </Typography>
        </div>
    )
}

export default LoginForm
