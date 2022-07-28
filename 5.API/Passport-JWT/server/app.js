const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');


const app = express();

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/',(req,res)=>{
    res.send(`Home Page`)
})

//Register Route
app.post('/register',(req,res)=>{
    res.send(`Register Page`)
})

//Login Route
app.post('/login',(req,res)=>{
    res.send(`Login Page`)
})

//Profile Route
app.get('/profile',(req,res)=>{
    res.send(`Profile Page`)
})

//Route Error
app.use((req,res,next)=>{
    res.status(404).json({
        message: 'Route not found',
    })
})


//Server Error
app.use((err,req,res,next)=>{
    res.status(500).json({
        message: 'Something Broken ',
    })
})

module.exports =app;