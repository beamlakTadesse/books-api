const mongoose = require('mongoose');

const { toJSON, paginate } = require('./plugins');


const bookSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    author: {
        type: String,
        required: true,
        trim: true,
      },
      title: {
        type: String,
        required: true,
        trim: true,
      },
      gener: {
        type: String,
        required: true,
        trim: true,
      },
      description: {
        type: String,
        required: true,
        trim: true,
      },
      publisher: {
        type: String,
        required: true,
        trim: true,
      },
      cover: {
        type: String,
        required: true,
        trim: true,
      }
   
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
bookSchema.plugin(toJSON);
bookSchema.plugin(paginate);




/**
 * @typedef Book
 */
const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
