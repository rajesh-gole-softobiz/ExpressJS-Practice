require('dotenv').config();

const mongoose = require('mongoose');

const mongo_db = process.env.MONGO_URL;
mongoose.connect(mongo_db)
    .then(()=>{
        console.log('DB is connected');
    })
    .catch((error)=>{
        console.log(error.message);
        process.exit(1);
    })