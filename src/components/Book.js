import React from 'react';
import PropTypes from 'prop-types';
import prog from '../styles/prog.png';

const Book = (props) => {
  const { book, deleteBook } = props;
  const handleDeleteBook = () => {
    deleteBook(book);
  };

  return (
    <div key={book.id} className="book">
      <div className="Bookinfo">
        <div className="book-c">{book.category}</div>
        <div className="book-t">{book.title}</div>
        <div className="author">Author Not implemented</div>
        <div className="actionsList">
          <div className="action">Comments</div>
          <div className="action">Edit</div>
          <div className="action2">Update</div>
        </div>
      </div>
      <div className="progdata">
        <img className="progbar" src={prog} alt="prgo" />
        <div>
          <p className="progressPercent">{book.complete}</p>
          <p>Completed</p>
        </div>
      </div>
      <div>
        <div className="currentChapter">Current chapter</div>
        <div className="Blerg">Chapter 4</div>
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
