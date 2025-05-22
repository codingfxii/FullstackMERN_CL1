// Import the 'combineReducers' utility from Redux to merge multiple reducers into a single root reducer
import { combineReducers } from 'redux';

// Import the 'posts' reducer, responsible for managing the state related to posts
import posts from './posts';  // Brought in from a local module

// Combine all reducers into one root reducer using 'combineReducers'
// Each property in the object represents a slice of the application state
// Here, we're assigning the 'posts' reducer to the 'posts' field of the global state
export const reducers = combineReducers({
  posts  // Maps the 'posts' reducer to the 'posts' state fieldz
});
