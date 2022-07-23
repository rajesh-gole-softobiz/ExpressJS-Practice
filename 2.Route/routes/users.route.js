const express = require('express');
const router=express.Router();




router.get('/user/register',(req,res)=>{
    res.send(`<h1>I\'m register</h1>`)
})

router.get('/user/login',(req,res)=>{
    res.send('I\'m login')
})


module.exports = router;


