// const Event = require('../../models/event');
// const User = require('../../models/user');
const Location = require('../../models/location');
// const { transformEvent } = require('./merge');

module.exports = {
  locations: async () => {
    try {
      const locations = await Location.find();
    //   return events.map(event => {
    //     return transformEvent(event);
    //   });
    return locations;
    } catch (err) {
      throw err;
    }
  },
//   createEvent: async (args, req) => {
//     if (!req.isAuth) {
//       throw new Error('Unauthenticated!');
//     }
//     const event = new Event({
//       title: args.eventInput.title,
//       description: args.eventInput.description,
//       price: +args.eventInput.price,
//       date: new Date(args.eventInput.date),
//       creator: req.userId
//     });
//     let createdEvent;
//     try {
//       const result = await event.save();
//       createdEvent = transformEvent(result);
//       const creator = await User.findById(req.userId);

//       if (!creator) {
//         throw new Error('User not found.');
//       }
//       creator.createdEvents.push(event);
//       await creator.save();

//       return createdEvent;
//     } catch (err) {
//       console.log(err);
//       throw err;
//     }
//   }
};