const  express = require('express');  
const  app = express();  
const bodyParser=require('body-parser')
const mongodb =require('mongodb').MongoClient
const mongoose=require('mongoose')
const Inter =require('./model/inter')

const port = 8000
//db coonect
mongoose.connect('mongodb://127.0.0.1:27017/test',
    
    ).then(()=>console.log('connected mongodb')).catch((err)=>console.log(err.message))
//api s connect
//get all user

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

const interRouter =require('./router');
app.use('/app',interRouter)


app.listen(port,()=>{
    console.log(`app is listening at the port:${port}`);})





