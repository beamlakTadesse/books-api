const httpStatus = require('http-status');
const { Book } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a user
 * @param {Object} bookBody
 * @returns {Promise<Book>}
 */
const createBook = async (bookBody) => {

  return Book.create(bookBody);
};

/**
 * Query for users
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryBooks = async (filter, options) => {
  const books = await Book.paginate(filter, options);
  return books;
};

/**
 * Get user by id
 * @param {ObjectId} id
 * @returns {Promise<Book>}
 */
const getBookById = async (id) => {
  return Book.findById(id);
};

/**
 * Get user by email
 * @param {string} gener
 * @returns {Promise<Book>}
 */
const getUserByGener = async (gener) => {
  return User.findOne({ gener });
};

/**
 * Update user by id
 * @param {ObjectId} bookId
 * @param {Object} updateBody
 * @returns {Promise<Book>}
 */
const updateBookById = async (bookId, updateBody) => {
  const book = await getBookById(bookId);
  if (!book) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Book not found');
  }
//   if (updateBody.email && (await User.isEmailTaken(updateBody.email, userId))) {
//     throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
//   }
  Object.assign(book, updateBody);
  await book.save();
  return book;
};

/**
 * Delete user by id
 * @param {ObjectId} bookId
 * @returns {Promise<Book>}
 */
const deleteBookById = async (userId) => {
  const book = await getBookById(userId);
  if (!book) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  await book.remove();
  return book;
};

module.exports = {
  createBook,
  queryBooks,
  getBookById,
  getUserByGener,
  updateBookById,
  deleteBookById,
};
