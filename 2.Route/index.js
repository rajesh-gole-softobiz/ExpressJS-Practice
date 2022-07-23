const app= require('./app');
const PORT = 3000;

// create server with express
app.listen(PORT,() =>{
    console.log(`Server is running at ${PORT}`);
})


