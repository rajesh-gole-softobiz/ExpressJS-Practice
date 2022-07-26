const express = require('express');
const app = express();
const ejs = require('ejs');
const cors = require('cors');

require('dotenv').config();
require('./config/passport');
require('./config/database');
const User = require('./models/user.model');

const bcrypt = require('bcrypt');
const saltRounds = 10;

const passport = require('passport');
const session = require('express-session');

const MongoStore = require('connect-mongo');



app.set("view engine", "ejs");
app.use(cors());
app.use(express.urlencoded({extended : true}));
app.use(express.json());

app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({
    mongoUrl : process.env.MONGO_URL,
    collectionName : "sessions",
  }),
//   cookie: { secure: true }
}))

app.use(passport.initialize())
app.use(passport.session())


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

        bcrypt.hash(req.body.password, saltRounds, async (err, hash)=> {
            // Store hash in your password DB.

            const newUser = new User({
                username : req.body.username,
                password : hash
            });
            await newUser.save();
            res.status(201).send('/login');
        });
    } catch (error) {
        res.status(500).send(error.message);
    }
})

app.get('/login',(req,res)=>{
    res.render("login")
})

app.post('/login', 
  passport.authenticate('local', {
     failureRedirect: '/login' ,
      successRedirect : '/profile' 
    }),
  function(req, res) {
    res.redirect('/');
  });

app.get('/logout',(req,res)=>{
    res.redirect("/")
})

app.get('/profile',(req,res)=>{
    res.render("profile")
})




module.exports = app;