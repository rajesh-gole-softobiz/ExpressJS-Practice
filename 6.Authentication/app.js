const express = require('express');
const app = express();
const ejs = require('ejs');
const cors = require('cors');

require('./config/database');
const User = require('./models/user.model');


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

app.post('/register',async (req,res)=>{
    try {
        const user = await User.findOne({username: req.body.username})
        if(user){
            return res.status(400).send('User Already Exist');
        }
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).send('/login');
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