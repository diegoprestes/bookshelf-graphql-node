const { GraphQLObjectType, GraphQLList, GraphQLID } = require('graphql');
const Author = require('../../models/author');
const Book = require('../../models/book');

const RootQuery = (types) => new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: types.BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // return _.find(books, { id: args.id });
        return Book.findById(args.id);
      }
    },
    author: {
      type: types.AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // return _.find(authors, { id: args.id });
        return Author.findById(args.id);
      }
    },
    books: {
      type: new GraphQLList(types.BookType),
      resolve(parent, args) {
        // return books;
        return Book.find({});
      }
    },
    authors: {
      type: new GraphQLList(types.AuthorType),
      resolve(parent, args) {
        // return authors;
        return Author.find({});
      }
    }
  }
});

module.exports = RootQuery;