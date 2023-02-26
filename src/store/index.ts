import { configureStore } from '@reduxjs/toolkit';
/* import ky from 'ky'; */

/* import * as api from './config'; */
import { filmsReducer } from '@/modules/CardsField/store/films-slice';

const store = configureStore({
  reducer: { films: filmsReducer },
  devTools: true,
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware({
      serializableCheck: false,
    }),
});

export { store };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
