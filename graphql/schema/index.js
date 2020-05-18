// const { buildSchema } = require('graphql');

// module.exports = buildSchema(`
// type Booking {
//     _id: ID!
//     event: Event!
//     user: User!
//     createdAt: String!
//     updatedAt: String!
// }

// type Event {
//   _id: ID!
//   title: String!
//   description: String!
//   price: Float!
//   date: String!
//   creator: User!
// }

// type User {
//   _id: ID!
//   email: String!
//   password: String
//   createdEvents: [Event!]
// }

// type AuthData {
//   userId: ID!
//   token: String!
//   tokenExpiration: Int!
// }

// input EventInput {
//   title: String!
//   description: String!
//   price: Float!
//   date: String!
// }

// input UserInput {
//   email: String!
//   password: String!
// }

// type RootQuery {
//     events: [Event!]!
//     bookings: [Booking!]!
//     login(email: String!, password: String!): AuthData!
// }

// type RootMutation {
//     createEvent(eventInput: EventInput): Event
//     createUser(userInput: UserInput): User
//     bookEvent(eventId: ID!): Booking!
//     cancelBooking(bookingId: ID!): Event!
// }

// schema {
//     query: RootQuery
//     mutation: RootMutation
// }
// `);
const { buildSchema } = require('graphql');

module.exports = buildSchema(`
type Location {
    _id: ID!
    name: String!
    address: String
    zip: Number
    rooms: [Room]
}

type User {
  _id: ID!
  email: String!
  name: String!
  escapeRate: Number
  completedRooms: [Room]
}

type Room {
  _id: ID!
  name: String!
  location: Location
  completedBy: [User]
  escapeTime: Number
  description: String
  fastestTime: Number
  escapeAttempts: Number
  escapeSuccesses: Number
}

input UserInput {
  email: String!
  name: String!
}

type RootQuery {
    users: [User!]!
    locations: [Location!]!
    rooms: [Room!]!
}

type RootMutation {
    createUser(userInput: UserInput): User
}

schema {
    query: RootQuery
    mutation: RootMutation
}
`);
