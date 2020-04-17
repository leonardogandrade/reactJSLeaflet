const express = require('express');
const server = express();
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');


//Database conection
try{
    mongoose.connect('mongodb://localhost:27017/map',{useNewUrlParser : true, useUnifiedTopology : true});
    console.log('database connection OK');
}catch(err){
    console.log(err);
}

//Models
requireDir('./src/models');

server.use(cors());
server.use(express.json());

//Routes
server.use('/api',require('./src/routes'));

server.listen(3002);
console.log('Server listen on port 3002');