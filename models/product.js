const mongoose=require('mongoose');

//Define the Product Schema
const ProductSchema = new mongoose.Schema({
        sku:{
            type:String,
            required:true,
            unique:true
        },
        type:{
            type:String,
            enum:['MYO Ring','MYO Pendant','MYO Earring'],
            required:true
        },
        category:{
            type:String,
            required:true
        },
        price:{
            type:Number,
            required:true
        }

})
//Create Product model
const product=mongoose.model('product',ProductSchema);
module.exports=product;