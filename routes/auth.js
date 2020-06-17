const express = require('express');
const router = express.Router();

//route Get api/auth
//desc Get useruser
//access Private
router.get('/', (req, res) => {
  res.send('Get logged in user');
});

//route Post api/auth
//desc Authorize user
//access Public
router.post('/', (req, res) => {
  res.send('log in user');
});

module.exports = router;
