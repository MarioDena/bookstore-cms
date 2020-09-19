import React from 'react';
import BooksList from '../containers/booklist';
import BooksForm from '../containers/bookform';
import '../App.css';

const App = () => (
  <div className="App">
    <BooksList />
    <BooksForm />
  </div>
);

export default App;
