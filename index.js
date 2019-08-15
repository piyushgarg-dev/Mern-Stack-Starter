const express = require('express');

const app = express();

const PORT = 5000;

const api = require('./api/routes');

app.use('/api',api);

app.listen(PORT,()=>{
    console.log(`Server Started on Port ${PORT}`)
})