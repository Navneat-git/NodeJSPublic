const express=require('express');
const routes=express.Router();


routes.get('/', async (req,res)=>{
    try{
       
        console.log('Welcome to NodeJS - Hello World');
        res.status(200).json('Welcome to NodeJS - Hello World');

    }catch(error){
        console.log(error);
        res.status(500).json({error: 'Internal Server Error'});
    }
});


    module.exports=routes;