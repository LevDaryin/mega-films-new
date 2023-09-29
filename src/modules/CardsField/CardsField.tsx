import { useCallback, useState } from 'react';
import { useFilms } from '../../hooks/useFilms';

import { PaginateWrapper } from '@/components/PaginateWrapper';
import { Card } from '@/components/Card';

import { Film } from '../../store/types';

const CardsField = () => {
  const [currentItems, setCurrentItems] = useState<Film[] | null>(null);
  const films = useFilms();

  /* const addCurrentItems = (films: Film[]): void => {
    setCurrentItems(films);
  }; */

  const addCurrentItems = useCallback((films: Film[]): void => {
    setCurrentItems(films);
  }, []);

  return (
    <>
      <div className="grid grid-cols-cards grid-rows-cards gap-[30px] rounded-[20px] border-2 border-[#364C84] p-[30px]">
        {films instanceof Array
          ? currentItems?.map((film) => (
              <Card
                key={film.imdbId}
                smallPosterURL={film.posterUrlPreview}
                filmName={film.nameRu}
                year={film.year}
                genres={film.genres}
                rating={film.ratingImdb}
              />
            ))
          : null}
      </div>
      <PaginateWrapper itemsPerPage={12} addCurrentItems={addCurrentItems} />
    </>
  );
};

export { CardsField };
