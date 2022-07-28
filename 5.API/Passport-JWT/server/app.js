const jwt = require('jsonwebtoken');
const passport = require('passport');

const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const User = require('./models/user.model');
require('dotenv').config();

require('./config/database');


const app = express();

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(passport.initialize());

require('./config/passport')


app.get('/',(req,res)=>{
    res.send(`Home Page`)
})

//Register Route
app.post('/register',async (req,res)=>{
    try {
            // If user already exist or not
    const user = await User.findOne({username: req.body.username});
    if(user) return res.status(400).send('User already exist');

    bcrypt.hash(req.body.password, saltRounds, async (err, hash) => {
        // Store hash in your password DB.
        const newUser = new User({
            username: req.body.username,
            password: hash,
        })

        await newUser.save()
        .then((user)=>{
            res.send({
                success: true,
                message: 'User is created successfully',
                user: {
                    id: user._id,
                    username: user.username
                }
            })
        })
        .catch((error)=>{
            res.send({
                success: false,
                message: "User is not created",
                error: error,
            })
        })
    });
    } catch (error) {
        res.status(500).send(error.message)
    }
    
})

//Login Route
app.post('/login',async(req,res)=>{
    //find user
    const user = await User.findOne({username: req.body.username})
    //if user not found
    if(!user){
        return res.status(401).send({
            success: false,
            message: "User is not found"
        })
    }
    // if user found we will match the bcrypt password with user login password
    if(!bcrypt.compareSync(req.body.password,user.password)){
        return res.status(401).send({
            success: false,
            message: "Incorrect Password"
        })
    }

    const payload = {
        id: user._id,
        username:user.username,
    }
    // if user login details match then we will give it login and generate a token
    //jwt.sign(payload, secretOrPrivateKey, [options, callback])
    const token = jwt.sign(payload, process.env.SECRET_KEY, {
        expiresIn: '2d',
    })
    return res.status(200).send({
        success:true,
        message:'User loggedIn Successfully',
        token: 'Bearer '+token // jwt will create a token and add a 'Bearer' infront of it 
    })
})

//Profile Route
// Get this code from here - https://www.passportjs.org/packages/passport-jwt/
app.get('/profile', passport.authenticate('jwt', { session: false }),
    (req, res) =>{
        res.status(200).send({
            success: true,
            user:{
                id: req.user._id,
                username: req.user.username,
            }
        });
    }
);

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