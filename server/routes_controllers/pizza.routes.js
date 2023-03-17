const express = require('express');
const router = express.Router();
const PizzaModel = require('../models/pizza.model')

router.get("/getallpizzas", async(req, res)=>{
    try{
        const pizzas = await PizzaModel.find({})
        res.send(pizzas)
    } catch(error){
        return res.status(400).json({message: error});
    }
});

module.exports = router;