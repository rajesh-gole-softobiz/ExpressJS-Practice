const express = require('express');
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser')

//https://expressjs.com/en/resources/middleware/body-parser.html

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.post('/user',(req,res)=>{
    const name = req.body.name;
    const age = req.body.age;
    res.send(`Hi ${name}, you are ${age}`)
})

// POSTMAN part-> Body ->raw
// {
//     "name": "Rajesh Gole",
//     "age":26
// }



app.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`);
})