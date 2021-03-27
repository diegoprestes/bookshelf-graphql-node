const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID
} = require('graphql');

const GenreType = () => new GraphQLObjectType({
  name: 'Genre',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
  })
});

module.exports = GenreType;