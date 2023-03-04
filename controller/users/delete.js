const express = require('express');  
const router = express.Router();  
const bodyParser=require('body-parser')
const mongodb =require('mongodb').MongoClient
const mongoose=require('mongoose')
const Inter =require('../../model/inter')


router.post('/delete/:id', async(req, res) =>{
    try{
        const user = await Inter.findByIdAndDelete(req.params.id)
        if (!user){
            return res.status(404).send();
        }
        res.send(user)
    }catch(err){
        res.status(500).send(err)
    }
});

module.exports = router