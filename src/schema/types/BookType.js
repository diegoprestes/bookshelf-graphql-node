const { GraphQLObjectType, GraphQLString, GraphQLID } = require('graphql');
const Author = require('../../models/author');

const BookType = (types) => new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    author: {
      type: types.AuthorType,
      resolve(parent, args) {
        // return _.find(authors, { id: parent.authorId });
        return Author.findById(parent.authorId);
      }
    }
  })
});

module.exports = BookType;