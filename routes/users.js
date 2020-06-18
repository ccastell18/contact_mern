const express = require('express');
const router = express.Router();

const User = require('../model/User');

//route Post api/users
//desc Register user
//access
router.post('/', (req, res) => {
  res.send(req.body);
});

module.exports = router;
