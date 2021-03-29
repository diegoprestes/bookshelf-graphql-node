const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList
} = require('graphql');
const Book = require('../../models/book');

const AuthorType = (types) => new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    country: { type: GraphQLString },
    image: { type: GraphQLString },
    birthDate: { type: GraphQLString },
    deathDate: { type: GraphQLString },
    books: {
      type: new GraphQLList(types.BookType),
      resolve(parent, args) {
        return Book.find({
          authorId: parent.id
        });
      }
    }
  })
});

module.exports = AuthorType;