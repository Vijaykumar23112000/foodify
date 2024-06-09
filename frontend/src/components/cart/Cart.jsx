import { Box, Button, Card, Divider, Grid, Modal, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import CartItem from './CartItem'
import AddressCard from './address/AddressCard'
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import { Field, Form, Formik } from 'formik';
import { validation } from './address/Validation';
import { useDispatch, useSelector } from 'react-redux';
import { createOrderAction } from '../redux/order/Action';

const Cart = () => {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        outline: "none",
    };

    const initialValues = {
        streetAddress: "",
        state: "",
        pincode: "",
        city: ""
    }

    const [open, setOpen] = useState(false);
    const { cart, authentication } = useSelector(store => store)
    const dispatch = useDispatch()

    const createOrderUsingSelectedAddress = () => { }

    const handleSubmit = (values) => {
        const requestData = {
            token: localStorage.getItem("token"),
            order: {
                restaurantId: cart.cartItems[0].food?.restaurant.id,
                deliveryAddress: {
                    streetAddress: values.streetAddress,
                    city: values.city,
                    stateProvince: values.state,
                    postalCode: values.pincode,
                    country: "India"
                }
            }
        }
        dispatch(createOrderAction(requestData))
        setOpen(false)
    }


    return (
        <>
            <main className='lg:flex justify-between'>
                <section className='lg:w-[30%] space-y-6 lg:min-h-screen pt-10'>
                    {
                        cart.cartItems.map((item, i) => <CartItem key={i} item={item} />)
                    }
                    <Divider />
                    <div className="billDetails px-5 text-sm">
                        <p className='py-5 font-extralight'>Bill Details</p>
                        <div className="space-y-3">
                            <div className="flex justify-between text-gray-400">
                                <p>Item Total</p>
                                <p>₹{cart.cart?.total}</p>
                            </div>
                            <div className="flex justify-between text-gray-400">
                                <p>Delivery Charge</p>
                                <p>₹21</p>
                            </div>
                            <div className="flex justify-between text-gray-400">
                                <p>GST and Restaurant Charges Charge</p>
                                <p>₹33</p>
                            </div>
                            <Divider />
                        </div>
                        <div className="flex justify-between text-gray-400 pt-2">
                            <p>Total Pay</p>
                            <p>₹{cart.cart?.total + 33 + 21}</p>
                        </div>
                    </div>
                </section>
                <Divider orientation='vertical' flexItem />
                <section className='lg:w-[70%] flex justify-center px-5 pb-10 lg:pb-0'>
                    <div className="">
                        <Typography variant='h3' className='text-center font-semibold text-2xl py-10' >Choose Delivery Address</Typography>
                        <div className="flex gap-5 flex-wrap justify-center">
                            {
                                [1, 1, 1, 1, 1].map((item, i) => <AddressCard item={item} key={i} showButton={true} handleSelectAddress={createOrderUsingSelectedAddress} />)
                            }
                            <Card className='flex gap-5 w-64 p-5'>
                                <AddLocationAltIcon />
                                <div className="space-y-3 text-gray-500">
                                    <h1 className='font-semibold text-lg text-white'>Add New Address</h1>
                                    <Button variant='outlined' fullWidth onClick={() => setOpen(true)}>Add</Button>
                                </div>
                            </Card>
                        </div>
                    </div>
                </section>
            </main>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={handleSubmit}
                        validationSchema={validation}
                    >
                        <Form>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Field
                                        as={TextField}
                                        name="streetAddress"
                                        label="Street Address"
                                        fullWidth
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Field
                                        as={TextField}
                                        name="state"
                                        label="State"
                                        fullWidth
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Field
                                        as={TextField}
                                        name="pincode"
                                        label="Pincode"
                                        fullWidth
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Field
                                        as={TextField}
                                        name="city"
                                        label="City"
                                        fullWidth
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button fullWidth variant='contained' type='submit' color='primary'>Deliver Here</Button>
                                </Grid>
                            </Grid>
                        </Form>
                    </Formik>
                </Box>
            </Modal>
        </>
    )
}

export default Cart
