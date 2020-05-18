const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  _id: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  escapedRooms: {
    type: Number
  },
  completedRooms: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Room'
    }
  ],
  favoriteRoom: {
    type: Schema.Types.ObjectId,
    ref: 'Room'
  },
  favoriteLocation: {
    type: Schema.Types.ObjectId,
    ref: 'Location'
  }
});

module.exports = mongoose.model('User', userSchema);
