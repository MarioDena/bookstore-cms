import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

const initialState = {
  books: [
    {
      id: Math.floor(Math.random() * 100000).toString(),
      title: 'One hundred Miles To Somewhere',
      category: 'Action',
      complete: '90%',
    },
    {
      id: Math.floor(Math.random() * 100000).toString(),
      title: 'One Yard Away From You',
      category: 'Action',
      complete: '45%',
    },
  ],
};

const store = createStore(rootReducer, initialState);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
