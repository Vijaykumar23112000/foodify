import React, { useEffect } from 'react'
import OrderCard from './Card/OrderCard'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getUsersOrderAction } from '../../redux/order/Action'

const Orders = () => {

    const { authentication, cart, order } = useSelector(store => store)
    const navigate = useNavigate()
    const token = localStorage.getItem("token")
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsersOrderAction(token))
    }, [authentication.token])

    return (
        <div className='flex items-center flex-col'>
            <h1 className='text-xl text-center py-7 font-semibold'>My Orders</h1>
            <div className="space-y-5 w-full lg:w-1/2">
                {
                    order.orders.map(order => order.items.map(item => <OrderCard item={item} order = {order} />))
                }
            </div>
        </div>
    )
}

export default Orders
