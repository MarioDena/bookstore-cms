import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteBooks } from '../actions/index';
import Book from '../components/Book';

const mapStateToProps = (state) => {
  return {
    books: state.books,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteBook: (book) => dispatch(deleteBooks(book)),
  };
};

const BookList = (props) => {
  const { books, deleteBook } = props;
  const handleDeleteBook = (book) => deleteBook(book);
  return (
    <div className="Bookstable">
      <h3>Bookstore CMS</h3>
      <div className="table">
        {books.map((book) => (
          <Book
            book={book}
            key={book.id}
            id={book.id}
            category={book.category}
            title={book.title}
            deleteBook={handleDeleteBook}
          />
        ))}
      </div>
    </div>
  );
};

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
  deleteBook: PropTypes.func,
};

BookList.defaultProps = {
  books: [],
  deleteBook: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
