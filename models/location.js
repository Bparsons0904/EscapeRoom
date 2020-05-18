const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const locationSchema = new Schema({
  _id: {
    type: String
  },
  name: {
    type: String,
    required: true
  },
  address: {
    type: String
  },
  zip: {
    type: Number
  },
  rooms: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Room'
    }
  ]
});

module.exports = mongoose.model('Location', locationSchema);