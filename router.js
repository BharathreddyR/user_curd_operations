const express = require('express')
const router = express.Router()


const user = require('./controller/users/index');
router.use('/user',user);

module.exports = router