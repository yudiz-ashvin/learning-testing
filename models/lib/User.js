const mongoose = require('mongoose');

const User = mongoose.Schema({
  sUserName: { type: String, default: '' },
  sEmail: { type: String, default: '' },
  sMobile: { type: String, default: '' },
  sPassword: { type: String },
  nAge: Number,
});

module.exports = mongoose.model('users', User);
