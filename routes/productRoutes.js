const express=require('express');
const routes=express.Router();
const Product=require('./../models/product');


routes.get('/', async (req,res)=>{
    try{
        const data=await Product.find();
        console.log('Data Fetched');
        res.status(200).json(data);

    }catch(error){
        console.log(error);
        res.status(500).json({error: 'Internal Server Error'});
    }
});

routes.post('/', async (req,res)=>{
    try{
    const data=req.body // Assuming the request body contains the item data

    //Create new Product document using mongo db model
    const newItem= new Product(data);

    //save the new product data in to database
    const response = await newItem.save();
    console.log('data inserted successfully');
    res.status(200).json(response);
    }catch(error){
        console.log(error);
        res.status(500).json({error: 'Internal Server Error'});

    }

    });

    routes.get('/:type', async (req,res)=>{
        try{
            const productType=req.params.type;
            const data=await Product.find({type:productType});
            if(data){
            console.log('Data Fetched');
            res.status(200).json(data);
            }else{
                res.status(404).json({error:"invalid product type"}); 
            }
    
        }catch(error){
            console.log(error);
            res.status(500).json({error: 'Internal Server Error'});
        }
    });

    module.exports=routes;