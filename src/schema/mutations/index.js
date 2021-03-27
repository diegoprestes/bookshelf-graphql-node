const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
  GraphQLID
} = require('graphql');
const Author = require('../../models/author');
const Book = require('../../models/book');

const Mutation = (types) => new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addAuthor: {
      type: types.AuthorType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: new GraphQLNonNull(GraphQLInt) }
      },
      resolve(parent, args) {
        const { name, age } = args;
        let author = new Author({
          name,
          age
        });
        return author.save();
      }
    },
    addBook: {
      type: types.BookType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        genre: { type: new GraphQLNonNull(GraphQLString) },
        authorId: { type: new GraphQLNonNull(GraphQLID) }
      },
      resolve(parent, args) {
        const { name, genre, authorId } = args;
        let book = new Book({
          name,
          genre,
          authorId
        });
        return book.save();
      }
    }
  }
});

module.exports = Mutation;