const express = require ('express');
const db = require('../server/config/db.config')
const Pizza = require('../server/models/pizza.model')


const app = express();

app.use(express.json());
const pizzasRoute = require('./routes_controllers/pizza.routes')
const userRoute = require('./routes_controllers/user.routes')
app.use('/api/pizzas/', pizzasRoute)
app.use('/api/users/', userRoute)
app.get("/", (req, res)=>{
    res.send('Servidor trabajando' + port);
});

app.get("/getpizzas", (req,res) =>{
    Pizza.find( {} , (err, docs)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send(docs)
        }

    })
})

const port = process.env.PORT || 8000;

app.listen(port, ()=> 'servidor trabajando en el puerto');