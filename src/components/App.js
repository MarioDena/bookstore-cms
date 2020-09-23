import React from 'react';
import BooksList from '../containers/booklist';
import BooksForm from '../containers/bookform';
import '../styles/booklist.css';
import '../styles/form.css';

const App = () => (
  <div className="App">
    <BooksList />
    <BooksForm />
  </div>
);

export default App;
