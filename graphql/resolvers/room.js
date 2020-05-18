// const Event = require('../../models/event');
// const User = require('../../models/user');
const Room = require('../../models/room');
// const { transformEvent } = require('./merge');

module.exports = {
  rooms: async () => {
    try {
      const rooms = await Room.find();
    //   return events.map(event => {
    //     return transformEvent(event);
    //   });
    return rooms;
    } catch (err) {
      throw err;
    }
  }
};