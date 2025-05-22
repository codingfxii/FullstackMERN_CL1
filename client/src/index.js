import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { reducers } from './reducers';  // Importing the combined root reducers
import App from './App';  // The main component that represents the entire application
import './index.css';  // Global stylesheet for base styles

// Initialize the Redux store with middleware to support asynchronous logic (thunk)
const store = createStore(
  reducers,  // Root reducer made up of combined smaller reducers
  compose(
    applyMiddleware(thunk)  // Apply redux-thunk middleware for handling async actions
  )
);

// Mount the React application to the DOM and provide access to the Redux store
ReactDOM.render(
  <Provider store={store}>  {/* Makes the Redux store available throughout the app */}
    <App />  {/* The primary app component rendered inside the Provider */}
  </Provider>,
  document.getElementById('root')  // Target DOM node with the id 'root' to render the app into
);
