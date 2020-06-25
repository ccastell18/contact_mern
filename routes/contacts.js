const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../model/User');
const Contact = require('../model/Contact');

//route Post api/contact
//desc get all contacts
//access private
router.get('/', auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(contacts);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
});

//route Post api/contact
//desc add contacts
//access private
router.post('/', (req, res) => {
  res.send('add contacts');
});

//route Put api/contact/:id
//desc update contacts
//access private
router.put('/:id', (req, res) => {
  res.send('update contacts');
});
//route Delete api/contact/:id
//desc delete contacts
//access private
router.delete('/:id', (req, res) => {
  res.send('delete contacts');
});

module.exports = router;
