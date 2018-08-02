import * as express from 'express';
import * as graphqlHTTP from 'express-graphql';
import * as fs from 'fs';
import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolver';

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
