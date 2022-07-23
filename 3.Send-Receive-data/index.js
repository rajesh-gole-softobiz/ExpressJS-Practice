const express = require('express');
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser')

//https://expressjs.com/en/resources/middleware/body-parser.html

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/register',(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})

app.post('/register',(req,res)=>{
    //Receive the value from client to server
    const fullName = req.body.fullName; // this fullName is as in index.html name=fullName
    const email = req.body.email;
    const psw= req.body.psw;

    res.send(`<h1>Your Full Name : ${fullName}, Email : ${email}, Password : ${psw}</h1>`)
})

app.get('/',(req,res)=>{
    res.redirect('/register');
})

// POSTMAN part-> Body ->raw
// {
//     "name": "Rajesh Gole",
//     "age":26
// }



app.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`);
})