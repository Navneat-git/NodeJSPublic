const mongoose=require('mongoose');
require('dotenv').config();
//Define the MongoDB connection URL
// const mongoURL=process.env.MONGODB_URL_LOCAL; // it is local mongodb database
const mongoURL =process.env.MONGODB_URL_CLOUD; // it is mongodb atlas cloud dabase url

//Setup MongoDB connection
//useNewUrlParser and useUnifiedTopology options are deprecated in the latest MongoDB Node.js driver versions. These options were necessary in earlier versions but have since become default behavior and are no longer needed.
// mongoose.connect(mongoURL,{
//     useNewURLParser:true,
//     useUnifiedTopology:true
// });  

mongoose.connect(mongoURL);

//Get the default connection
//Mongoose maintains a default connection object representing the MongoDB Connection.
const db=mongoose.connection;

//Default event listners for database connection
db.on('connected',()=>{
    console.log('DB connected successfully');
});

db.on('error',(err)=>{
    console.log('DB connection error:- ',err);
});

db.on('disconnected',()=>{
    console.log('DB disconnected successfully');
});

//Export the DB connection
module.exports=db;