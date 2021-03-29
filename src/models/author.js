const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authorSchema = new Schema({
  name: String,
  country: String,
  image: String,
  birthDate: String,
  deathDate: String,
});

module.exports = mongoose.model('Author', authorSchema);
