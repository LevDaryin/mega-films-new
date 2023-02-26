import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../../hooks';

import { loadFilms } from '@/modules/CardsField/store/films-slice';

const useFilms = () => {
  const dispatch = useAppDispatch();

  const films = useAppSelector((state) => state.films.list);

  const count = () => {
    if (films instanceof Array) {
      return films.length;
    }
  };

  console.log(count);

  useEffect(() => {
    if (!count()) {
      console.log('я вызван');
      dispatch(loadFilms());
    }
  }, []);

  return films;
};

export { useFilms };
