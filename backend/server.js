const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config()

const app = express();

//Middleware
app.use(express.json());
app.use((req, res, next)=> {
  console.log(req.path, req.method);
  if (req.body) {
    console.log('Request body:');
    console.log(req.body);
  }  
  next();
})

// Routes
app.use('/api/product', require('./src/routes/product'));
app.use('/api/auth', require('./src/routes/auth'));


mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});