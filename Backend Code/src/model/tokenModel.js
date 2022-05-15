const mongoose = require('mongoose');

const token = new mongoose.Schema({
  token: { type: String, required: true },
  userId: { type: mongoose.Types.ObjectId, required: true },
});

module.exports = mongoose.model('token', token);
