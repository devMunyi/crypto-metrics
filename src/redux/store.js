import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import cryptoReducer from './reducers';

export default configureStore(
  {
    reducer: {
      crypto: cryptoReducer,
    },
  },
  applyMiddleware(logger),
);
