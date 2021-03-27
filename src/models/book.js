const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  name: String,
  genres: [String],
  pages: Number,
  cover: String,
  releaseDate: String,
  authorId: String
});

module.exports = mongoose.model('Book', bookSchema);