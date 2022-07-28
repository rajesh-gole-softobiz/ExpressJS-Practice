const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const userRouter = require('./routes/users.route');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


//GET
app.use('/users',userRouter);


app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/views/index.html');
})

//Route not found
app.use((req,res,next)=>{
    res.status(404).json({message: '404 Not found!!!'})
})

//server error
app.use((err,req,res,next)=>{
    res.status(500).json({message: 'Something Broke'})
})


module.exports = app;
