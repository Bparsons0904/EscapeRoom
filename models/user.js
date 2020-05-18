const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  escapeRate: {
    type: Number
  },
  completedRooms: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Room'
    }
  ]
});

module.exports = mongoose.model('User', userSchema);
