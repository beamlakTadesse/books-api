const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createBook = {
  body: Joi.object().keys({
    author: Joi.string().required(),
    name: Joi.string().required(),
    title: Joi.string().required(),
    gener: Joi.string().required(),
    description: Joi.string().required(),
    publisher: Joi.string().required(),
    cover:Joi.string().required(),
  }),
};

// const getBooks = {
//   query: Joi.object().keys({
    // author: Joi.string().required().email(),
    // name: Joi.string().required(),
    // title: Joi.string().required(),
    // gener: Joi.string().required(),
    // publisher: Joi.string().required(),
//     sortBy: Joi.string(),
//     limit: Joi.number().integer(),
//     page: Joi.number().integer(),
//   }),
// };

const getBook = {
  params: Joi.object().keys({
    bookId: Joi.string().custom(objectId),
  }),
};

const updateBook = {
  params: Joi.object().keys({
    bookId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
        author: Joi.string(),
        name: Joi.string(),
        title: Joi.string(),
        gener: Joi.string(),
        publisher: Joi.string(),
        cover:Joi.string()
    })
    .min(1),
};

const deleteBook = {
  params: Joi.object().keys({
    bookId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createBook,
  getBook,
//   getBooks,
  updateBook,
  deleteBook,
};
