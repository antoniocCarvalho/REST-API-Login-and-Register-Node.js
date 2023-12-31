require('dotenv').config() 
const express = require('express')
const app = require('./app')
app.use(express.json());

const PORT =  process.env.PORT

app.listen(PORT, () => console.log(`Server running or port ${PORT}`))
