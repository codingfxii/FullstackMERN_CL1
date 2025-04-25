import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { reducers } from './reducers';  // Importing the combined reducers
import App from './App';  // The main application component
import './index.css';  // Importing the global CSS file for styling

// Creating the Redux store with middleware (thunk) for asynchronous actions
const store = createStore(
  reducers,  // The root reducer, combining all individual reducers
  compose(  // Composing the store with applied middleware
    applyMiddleware(thunk)  // Adding redux-thunk to handle async actions
  )
);

// Rendering the React app and wrapping it with the Redux Provider to connect the store
ReactDOM.render(
  <Provider store={store}>  {/* Provider component passes the store to the entire app */}
    <App />  {/* The root component of the application */}
  </Provider>,
  document.getElementById('root')  // Attaching the app to the DOM element with the id 'root'
);
