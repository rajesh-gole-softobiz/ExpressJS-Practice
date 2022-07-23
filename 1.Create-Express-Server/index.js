const app= require('./app');
const PORT = 3000;

// create server with express
app.listen(PORT,() =>{
    console.log(`Server is running at ${PORT}`);
})



// // Normal NodeJS code to create server
// const http = require('http');
// const server=http.createServer((req,res)=>{
//     res.end('Hi...')
// })

// server.listen(PORT,()=>{
//     console.log('Server running..');
// });

