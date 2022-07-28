const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const User = require('./models/user.model');


require('./config/database');


const app = express();

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

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