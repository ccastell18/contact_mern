const express = require('express');
const router = express.Router();

//route Post api/contact
//desc get all contacts
//access private
router.get('/', (req, res) => {
  res.send('All contacts');
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
