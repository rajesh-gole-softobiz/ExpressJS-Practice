const express = require('express');
const router=express.Router();




router.get('/user/register',(req,res)=>{
    res.send(`<h1>I\'m register</h1>`)
})

router.get('/user/login',(req,res)=>{
    res.send('I\'m login')
})

// Sending JSON data and status code as response

router.use('/raj',(req,res)=>{
    // res.status(200).json({
    //     msg: "Hello Raj",
    //     staCode: 200
    // })

// response redirect    
    res.redirect('/user/register')
})


module.exports = router;


