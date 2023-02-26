import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ky from 'ky';

import { FilmsState } from '@/modules/CardsField/store/types';

const loadFilms = createAsyncThunk('@@films/load-films', async () => {
  const data = await ky.get('http://localhost:3000/films').json();
  return data;
});

// need extra for api and client

const initialState: FilmsState = {
  status: 'idle',
  error: null,
  list: [],
};

const filmsSlice = createSlice({
  name: '@@films',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadFilms.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(loadFilms.rejected, (state) => {
        state.status = 'rejected';
        state.error = 'Упс... Что-то пошло не так'; // error
      })
      .addCase(loadFilms.fulfilled, (state, action) => {
        state.status = 'received';
        state.list = action.payload;
      });
  },
});

const filmsReducer = filmsSlice.reducer;

export { loadFilms, filmsReducer };
