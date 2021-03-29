const { GraphQLSchema } = require('graphql');
const RootQuery = require('./queries/RootQuery');
const Mutation = require('./mutations');
const AuthorType = require('./types/AuthorType');
const BookType = require('./types/BookType');
const GenreType = require('./types/GenreType');

const types = {}
types.AuthorType = AuthorType(types);
types.BookType = BookType(types);
types.GenreType = GenreType();

module.exports = new GraphQLSchema({
  query: RootQuery(types),
  mutation: Mutation(types)
});
