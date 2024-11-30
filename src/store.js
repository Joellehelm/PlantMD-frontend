import rootReducer from "./reducers";
import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'
import logger from 'redux-logger';


// TODO
// upgrade to '@reduxjs/toolkit' as createStore is depricated

const initialState = {

};

// const middleware = [thunk];
const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk, logger)
);
export default store;