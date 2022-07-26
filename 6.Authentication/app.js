const express = require('express');
const app = express();
const ejs = require('ejs');
const cors = require('cors');


app.set("view engine", ejs);
app.use(cors());
app.use(express.urlencoded({extended : true}));
app.use(express.json());

module.exports = app;