const express = require('express');  
const router = express.Router();  
const bodyParser=require('body-parser')
const mongodb =require('mongodb').MongoClient
const mongoose=require('mongoose')
const Inter =require('../../model/inter')


router.post('/createUser',async(req,res)=>{
    // const inters = new Inter({
    //     name:req.body.name,
    //     email:req.body.email,
    //     mobilenumber:req.body.number   
    // })
    try{
        const requestBody =req.body
        const { name,email,mobilenumber } = requestBody
        let inters = {
            name,
            email,
            mobilenumber
        }
        
        const a1 =await Inter.create(inters)
        res.send(a1)
    }catch(err){
        res.send(err.message)
    }
});

module.exports = router
