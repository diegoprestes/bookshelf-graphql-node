const { GraphQLObjectType, GraphQLList, GraphQLID } = require('graphql');
const Author = require('../../models/author');
const Book = require('../../models/book');
const Genre = require('../../models/genre');

const RootQuery = (types) => new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: types.BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Book.findById(args.id);
      }
    },
    author: {
      type: types.AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Author.findById(args.id);
      }
    },
    genre: {
      type: types.GenreType,
      args: { id: { type: GraphQLID }},
      resolve(parent, args) {
        return Genre.findById(args.id);
      }
    },
    books: {
      type: new GraphQLList(types.BookType),
      resolve(parent, args) {
        return Book.find({});
      }
    },
    authors: {
      type: new GraphQLList(types.AuthorType),
      resolve(parent, args) {
        return Author.find({});
      }
    },
    genres: {
      type: new GraphQLList(types.GenreType),
      resolve(parent, args) {
        return Genre.find({});
      }
    }
  }
});

module.exports = RootQuery;