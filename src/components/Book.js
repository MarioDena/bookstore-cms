import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { book, deleteBook } = props;
  const handleDeleteBook = () => {
    deleteBook(book);
  };

  return (
    <div key={book.id} className="book">
      <div className="book-c">{book.id}</div>
      <div className="book-t">{book.title}</div>
      <div className="book-c">Category: {book.category}</div>
      <div>
        <button className="btn-remove" onClick={handleDeleteBook} type="button">
          Delete
        </button>
      </div>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  deleteBook: PropTypes.func.isRequired,
};

export default Book;
