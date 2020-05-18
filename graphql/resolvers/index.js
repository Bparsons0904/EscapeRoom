// const authResolver = require('./auth');
// const eventsResolver = require('./events');
// const bookingResolver = require('./booking');
const locationResolver = require('./location');
const userResolver = require('./user');

const rootResolver = {
  // ...authResolver,
  // ...eventsResolver,
  // ...bookingResolver,
  ...locationResolver,
  ...userResolver
};

module.exports = rootResolver;