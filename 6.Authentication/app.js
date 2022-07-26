const express = require('express');
const app = express();
const ejs = require('ejs');
const cors = require('cors');


app.set("view engine", "ejs");
app.use(cors());
app.use(express.urlencoded({extended : true}));
app.use(express.json());

//base url
app.get('/',(req,res)=>{
    res.render("index")
})

//Route : register-get, register-post, login-get, login-post, profile-protected
app.get('/register',(req,res)=>{
    res.render("register")
})

app.post('/register',(req,res)=>{
    try {
        res.status(201).send('User is Created');
    } catch (error) {
        res.status(500).send(error.message);
    }
})

app.get('/login',(req,res)=>{
    res.render("login")
})

app.post('/login',(req,res)=>{
    try {
        res.status(200).send('User logged in');
    } catch (error) {
        res.status(500).send(error.message);
    }
})

app.get('/logout',(req,res)=>{
    res.redirect("/")
})

app.get('/profile',(req,res)=>{
    res.render("profile")
})




module.exports = app;