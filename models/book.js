const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  status: {
    type: Boolean,
    required: true
  },
});

module.exports = mongoose.model('Book', bookSchema);
