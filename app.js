const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');
const mongoose = require('mongoose');

const graphQlSchema = require('./graphql/schema/index');
const graphQlResolvers = require('./graphql/resolvers/index');
// const isAuth = require('./middleware/is-auth');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

// app.use(isAuth);

app.use(
  '/graphql',
  graphqlHttp({
    schema: graphQlSchema,
    rootValue: graphQlResolvers,
    graphiql: true
  })
);

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://heroku_3gtc8qbb:heroku_3gtc8qbb@ds129050.mlab.com:29050/heroku_3gtc8qbb", { useNewUrlParser: true, useUnifiedTopology: true })
  // .connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    app.listen(process.env.PORT || 8080);
    // app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });
