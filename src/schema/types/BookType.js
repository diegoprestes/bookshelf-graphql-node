const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLList
} = require('graphql');
const Author = require('../../models/author');
const Genre = require('../../models/genre');

const BookType = (types) => new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genres: {
      type: new GraphQLList(types.GenreType),
      resolve(parent, args) {
        return Genre.find({ '_id': { $in: parent.genres } });
      }
    },
    pages: { type: GraphQLInt},
    cover: { type: GraphQLString },
    releaseDate: { type: GraphQLString },
    author: {
      type: types.AuthorType,
      resolve(parent, args) {
        return Author.findById(parent.authorId);
      }
    }
  })
});

module.exports = BookType;