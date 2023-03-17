const express = require("express");
const router = express.Router();
const stripe = require("stripe")(process.env.BACK_END_STRIPE_KEY);
const Order = require('../models/orderModel')
router.post("/placeorder", async (req, res) => {

    const { token, subtotal, currentUser, cartItems } = req.body

    try {
        const customer = await stripe.customers.create({
            email: token.email,
            source: token.id
        })

        const payment = await stripe.charges.create({
            amount: subtotal * 100,
            currency: 'inr',
            customer: customer.id,
            receipt_email: token.email
        }, )

        if (payment) {

            const neworder = new Order({
                name: currentUser.name,
                email: currentUser.email,
                userid: currentUser._id,
                orderItems: cartItems,
                orderAmount: subtotal,
                shippingAddress: {
                    street: token.card.address_line1,
                    city: token.card.address_city,
                    country: token.card.address_country,
                    pincode: token.card.address_zip
                },
                transactionId: payment.source.id
            })

            neworder.save()

            res.send('Order placed successfully')
        }
        else {
            res.send('Payment failed')
        }

    } catch (error) {
        return res.status(400).json({ message: 'Something went wrong' + error });
    }

});