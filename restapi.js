const express=require('express');
const app=express();
const bodyParser=require('body-parser');
app.use(bodyParser.json()); //req.body

const Product=require('./models/product');

app.get('/', function(req,res){
    res.send('Hellow world');
})




app.listen(3000,()=>{
    console.log("Listening server on 3000 Port");
});


const objectToConvert={
    name:"Alice",
    age:24
};

const json=JSON.stringify(objectToConvert); //convert object to json string
console.log(json);
console.log(typeof json);


module.exports={
    app
}