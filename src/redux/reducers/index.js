import { FETCH_CRYPTOS, FETCH_SINGLE_CRYPTO_DETAILS } from '../actions';

/* eslint-disable comma-dangle */
// set initial state
const initialState = {
  cryptoList: [],
  cryptoDetails: {},
  isLoading: false,
  cryptoCount: 0,
};

// reducer
const cryptoReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case `${FETCH_CRYPTOS}/fulfilled`:
      return { ...state, cryptoList: payload, isLoading: false };

    case `${FETCH_CRYPTOS}/pending`:
      return { ...state, isLoading: true };

    case `${FETCH_CRYPTOS}/rejected`:
      return { ...state, isLoading: false };

    case `${FETCH_SINGLE_CRYPTO_DETAILS}/fulfilled`:
      return { ...state, cryptoDetails: payload, isLoading: false };

    case `${FETCH_SINGLE_CRYPTO_DETAILS}/pending`:
      return { ...state, isLoading: true };

    case `${FETCH_SINGLE_CRYPTO_DETAILS}/rejected`:
      return { ...state, isLoading: false };

    default:
      return state;
  }
};

export default cryptoReducer;
