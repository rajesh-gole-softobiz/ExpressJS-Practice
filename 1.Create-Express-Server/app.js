const express = require('express');
const app=express();


app.get('/',(req,res)=>{
    res.send('I\'m a get request')
})

app.get('/register',(req,res)=>{
    res.send('I\'m register')
})

app.get('/login',(req,res)=>{
    res.send('I\'m login')
})

app.use((req,res)=>{
    res.send('404! Not Found')
})

app.post('/',(req,res)=>{
    res.send('I\'m a post request')
})

app.put('/',(req,res)=>{
    res.send('I\'m a put request')
})

app.delete('/',(req,res)=>{
    res.send('I\'m a delete request')
})




module.exports = app;


