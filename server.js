const express=require('express');
const app=express();

const bodyParser=require('body-parser');
app.use(bodyParser.json()); //req.body
// const fs=require('./filesystem');
const notes=require('./notes');
// const ld=require('./lodash');
const db=require('./db');
require('dotenv').config();
const PORT=process.env.PORT || 3000;

const productRoutes=require('./routes/productRoutes');
app.use('/item',productRoutes);

console.log('server file is available');

var age = notes.age;
console.log(age);
var result=notes.addNumber(age,10);

console.log(result);


app.listen(PORT,()=>{
    console.log("Listening server on 3000 Port");
});