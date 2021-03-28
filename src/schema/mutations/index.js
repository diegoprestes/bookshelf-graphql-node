const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLID
} = require('graphql');
const Author = require('../../models/author');
const Book = require('../../models/book');
const Genre = require('../../models/genre');

const Mutation = (types) => new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addAuthor: {
      type: types.AuthorType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        country: { type: new GraphQLNonNull(GraphQLString) },
        image: { type: new GraphQLNonNull(GraphQLString) },
        birthDate: { type: new GraphQLNonNull(GraphQLString) },
        deathDate: { type: GraphQLString }
      },
      resolve(parent, args) {
        const { name, country, image, birthDate, deathDate } = args;
        let author = new Author({
          name,
          country,
          image,
          birthDate,
          deathDate
        });
        return author.save();
      }
    },
    addBook: {
      type: types.BookType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        genres: { type: new GraphQLNonNull(new GraphQLList(GraphQLID)) },
        pages: { type: new GraphQLNonNull(GraphQLInt) },
        cover: { type: new GraphQLNonNull(GraphQLString) },
        year: { type: new GraphQLNonNull(GraphQLInt) },
        authorId: { type: new GraphQLNonNull(GraphQLID) }
      },
      resolve(parent, args) {
        const { name, genres, pages, cover, year, authorId } = args;
        let book = new Book({
          name,
          genres,
          pages,
          cover,
          year,
          authorId
        });
        return book.save();
      }
    },
    addGenre: {
      type: types.GenreType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parent, args) {
        const { name } = args;
        let genre = new Genre({
          name
        });
        return genre.save();
      }
    }
  }
});

module.exports = Mutation;