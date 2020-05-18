const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const roomSchema = new Schema({
  _id: {
    type: String
  },
  name: {
    type: String,
    required: true,
  },
  location: {
    type: Schema.Types.ObjectId,
    ref: "Location",
  },
  completedBy: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    }
  ],
  escapeTime: {
      type: Number
  },
  description: {
      type: String
  },
  fastestTime: {
      type: Number
  },
  escapeAttempts: {
      type: Number
  },
  escapeSuccesses: {
      type: Number
  }
});

module.exports = mongoose.model("Room", roomSchema);
