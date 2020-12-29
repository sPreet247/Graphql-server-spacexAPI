const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema');
const app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

const Port = process.env.Port || 4000;

app.listen(Port, () => {
  console.log(`Server Started on port ${Port}`);
});
