const express = require('express')
const app = express()
const mongoose = require('mongoose');
const Product = require('./models/product.models');
const productRoute = require('./Routes/product.route.js');
const cors = require('cors');


app.use(cors({
    origin:'http://localhost:3000'
}));

//middleware
app.use(express.json());
app.use (express.urlencoded(({extended: false})));

//routes

app.use('/api/products',productRoute)



//Get Product

app.get('/',(req,res)=> {
  res.send('API Connection updated')
});



mongoose.connect("mongodb+srv://aarthi01042004:aarthi01@cluster1.fhkav.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1")
.then(() => {
    console.log("connected to database");
    app.listen(3000,()=>{
        console.log("server is running on port 3000")
    } )
});