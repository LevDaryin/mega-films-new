import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppSelector, useAppDispatch } from '.';

import { selectCountInfo } from '@/modules/CardsField/store/films-slice';
import { loadFilms } from '@/modules/CardsField/store/films-slice';

import { Film } from '@/store/types';

const useFilms = (): Film[] | undefined => {
  const dispatch = useAppDispatch();

  const films = useAppSelector((state) => state.films.list);
  const { count } = useSelector(selectCountInfo);

  useEffect(() => {
    if (!count) {
      dispatch(loadFilms());
    }
  }, [count, dispatch]);

  if (films instanceof Array) {
    return films;
  } else {
    return undefined;
  }
};

export { useFilms };
