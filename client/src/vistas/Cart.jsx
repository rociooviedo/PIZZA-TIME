import React from "react";
import {useDispatch, useSelector } from 'react-redux';
import {addToCart} from '../actions/CartAction'
import { deleteFromCart } from "../actions/CartAction";
import Checkout from "../components/Checkout";

export default function Cart() {

    const cartState = useSelector(state => state.CartReducer);
    const cartItems = cartState.cartItems;
    var subTotal = cartItems.reduce((x, item)=> x+item.price, 0)
    const dispatch = useDispatch();
    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2 style={{ fontSize: '40px' }}>My cart</h2>

                    {cartItems.map(item => {
                        return <div className="flex-container">
                            <div className="text-left m-1 w-100">
                                <h1>{item.name} [{item.varient}]</h1>
                                <h1>Precio:{item.quantity}*{item.prices[0][item.varient]} = {item.price} RS/-</h1>
                                <h1 style={{display: 'inline'}}>Cantidad:</h1>
                                <i className="fa fa-plus" aria-hidden="true" onClick={()=>{dispatch(addToCart(item, item.quantity+1, item.varient))}}></i>
                                <b>{item.quantity}</b>
                                <i className="fa fa-minus" aria-hidden="true" onClick={()=>{dispatch(addToCart(item, item.quantity-1, item.varient))}}></i>
                            </div>
                            <div className="m-1 w-100">
                                <img src={item.image} style={{height:'80px', width:'80px'}} />
                            </div>
                            <div className="m-1 w-100">
                                <i className="fa fa-trash mt-5" aria-hidden='true' onClick={()=>{dispatch(deleteFromCart(item))}}></i>
                            </div>
                        </div>

                    })}

                </div>
                <div className="col-md-4 text-right">
                    <h2 style={{fontSize:'40px'}}>SubTotal:{subTotal}/Rs-</h2>
                    <Checkout subtotal={subTotal} />

                </div>
            </div>
        </div>
    )
}