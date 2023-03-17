import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'
import { placeOrder } from '../actions/OrderAction'
import Error from "../components/error";
import Loading from "../components/loading";
import Success from '../components/success'
export default function Checkout({ subtotal }) {

    const orderstate = useSelector((state) => state.placeOrderReducer)
    const { loading, error, success } = orderstate
    const dispatch = useDispatch()
    function tokenHander(token) {
        console.log(token);
        dispatch(placeOrder(token, subtotal))
    }
    return (
        <div>            
            {loading && (<Loading />)}
            {error && (<Error error='Something went wrong' />)}
            {success && (<Success success='Your Order Placed Successfully' />)}

            <StripeCheckout
                amount={subtotal * 100}
                shippingAddress
                token={tokenHander}
                stripeKey='pk_test_51K1Q1CSGyajYq73prUQG2AUzg9QkKhSXeWUKUlJy2Er8AewG32DnEE1feEUOVQkKY6cpcKbQKC2VxdFqm6dVdu8n00XxuF6HP4'
                currency='INR'
            >
                <button className='btn'>Pay Now</button>
            </StripeCheckout>
        </div>
    )
}