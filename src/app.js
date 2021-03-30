const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');
const schema = require('./schema/schema');

const app = express();
app.use(cors());
app.use(helmet());

const DB_USER = 'omnistack';
const DB_PASS = 'omnistack';
const DB_DATABASE = 'graphql-ninja';
mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASS}@cluster0-i7jak.mongodb.net/${DB_DATABASE}?retryWrites=true&w=majority`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once('open', () => {
  console.log('connected to database');
})

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('Now listening for requests on port 4000');
});