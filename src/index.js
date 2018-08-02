import express from 'express';
import graphqlHTTP from 'express-graphql';
import resolvers from './resolver';
import fs from 'fs';
import { makeExecutableSchema } from 'graphql-tools';

const schema = makeExecutableSchema({
  typeDefs : fs.readFileSync(`${__dirname}/schema.graphql`).toString(),
  resolvers,
});

const app = express();

app.use('/', graphqlHTTP({
  schema,
  graphiql: true,
}));

app.listen(4000, () => {
  console.log('server started !! port : 4000');
});
