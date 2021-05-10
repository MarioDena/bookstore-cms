/* eslint-disable import/no-duplicates */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteBooks } from '../actions/index';
import { filterBooks } from '../actions/index';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';
import login from '../styles/Login.png';

const mapStateToProps = (state) => {
  return {
    books: state.books,
    category: state.filter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteBook: (book) => dispatch(deleteBooks(book)),
    changeFilter: (filter) => dispatch(filterBooks(filter)),
  };
};

const BookList = (props) => {
  const { books, category, deleteBook, changeFilter } = props;
  const handleDeleteBook = (book) => deleteBook(book);
  return (
    <div className="Bookstable">
      <div className="mainnav">
        <h4>Bookstore CMS</h4>
        <p>FILTER:</p>
        <CategoryFilter changeFilter={changeFilter} />
        <img className="login" src={login} alt="login" />
      </div>
      <div className="table">
        {books
          .filter((b) => category === 'All' || b.category === category)
          .map((book) => (
            <Book
              book={book}
              key={book.id}
              id={book.id}
              category={book.category}
              title={book.title}
              completed={book.completed}
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
