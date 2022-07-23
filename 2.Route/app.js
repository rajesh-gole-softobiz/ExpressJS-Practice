const express = require('express');
const app=express();
const userRouter= require('./routes/users.route')


app.use(userRouter);

app.get('/',(req,res)=>{
    res.send(`<h1>I\'m a get request</h1>`)
})

app.use((req,res)=>{
    res.send('404! Not Found')
})

module.exports = app;


