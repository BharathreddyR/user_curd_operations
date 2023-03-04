const express = require('express');  
const router = express.Router();  
const bodyParser=require('body-parser')
const mongodb =require('mongodb').MongoClient
const mongoose=require('mongoose')
const Inter =require('../../model/inter')


router.post('/update/:id', async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['name', 'email', 'number'];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));
    console.log(isValidOperation)
    if (!isValidOperation) {
      return res.status(400).send({ error: 'Invalid updates' });
    }
    try {
      const user = await Inter.findById(req.params.id);
      if (!user) {
        return res.status(404).send();
      }
      updates.forEach((update) => user[update] = req.body[update]);
      await user.save();
      res.send(user);
    } catch (err) {
      res.status(500).send(err);
    }
  });


  module.exports = router