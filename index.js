const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productRoute = require('./Routes/product.route.js');

const app = express();

// Middleware
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/products', productRoute);

app.get('/', (req, res) => {
  res.send('API Connection updated');
});

// MongoDB Connection and Server Start
mongoose.connect('mongodb+srv://abinaya:123@ecommerce.gunty.mongodb.net/')
  .then(() => {
    console.log("Connected to database");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(err => console.error("Database connection error:", err));
