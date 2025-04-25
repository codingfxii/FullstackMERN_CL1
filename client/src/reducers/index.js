// Importing the 'combineReducers' function from Redux to combine individual reducers
import { combineReducers } from 'redux';

// Importing the 'posts' reducer, which handles actions related to posts in the application
import posts from './posts';  // The posts reducer is imported from the relative path

// The 'combineReducers' function takes an object where each key corresponds to a slice of the state
// Here, we are combining the 'posts' reducer with the overall application state
// The resulting 'reducers' object can be used to configure the Redux store
export const reducers = combineReducers({
  posts  // Associating the 'posts' reducer with the 'posts' key in the state
});
