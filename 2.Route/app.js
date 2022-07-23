const express = require('express');
const app=express();
const userRouter= require('./routes/users.route')


app.use(userRouter);

//===================Sending HTML file as response=================
app.use('/',(req,res)=>{
    res.status(200);
    res.sendFile(__dirname+"/views/index.html")
})

app.use((req,res)=>{
    res.send('404! Not Found')
})

module.exports = app;


