const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
  user: {
    //create an element with MongoDB,  the doc has an Object Id
    type: mongoose.Schema.Types.ObjectId,
    //refers to our Auth user
    ref: 'users',
  },

  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  type: {
    type: String,
    default: 'personal',
  },
  Date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('contact', ContactSchema);
