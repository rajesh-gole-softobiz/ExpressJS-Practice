const express = require('express');
const app = express();
const PORT = 3000;

//Middleware is a function in which there are three things - req obj, res obj, next fun 
const myMiddleware = (req,res,next) =>{
    console.log('Middleware function');
    req.curTime =new Date(Date.now());
    next();
}


app.get('/',myMiddleware,(req,res)=>{
    console.log('home'+req.curTime);
    res.send('Welcome to Home Page')
})

app.listen(PORT,()=>{
    console.log(`Server running at ${PORT}`);
})