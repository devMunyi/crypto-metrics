import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const FETCH_CRYPTOS = 'crypto_list';
export const FETCH_SINGLE_CRYPTO_DETAILS = 'crypto_details';

// set api url
const url = 'https://api.coincap.io/v2/assets';

// action creator to fetch all cryptos
export const fetchCryptos = createAsyncThunk(FETCH_CRYPTOS, async () => {
  const { data: result } = await axios.get(url);
  return result.data;
});

// action creator to fetch a single detailed crypto
export const fetchSingleCrypto = createAsyncThunk(
  FETCH_SINGLE_CRYPTO_DETAILS,
  async (id) => {
    const { data: result } = await axios(`${url}/${id}`);

    return result.data;
  },
);
