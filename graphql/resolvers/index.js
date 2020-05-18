// const authResolver = require('./auth');
// const eventsResolver = require('./events');
// const bookingResolver = require('./booking');
const locationResolver = require('./location');
const userResolver = require('./user');
const roomResolver = require('./room');

const rootResolver = {
  // ...authResolver,
  // ...eventsResolver,
  // ...bookingResolver,
  ...locationResolver,
  ...userResolver,
  ...roomResolver
};

module.exports = rootResolver;