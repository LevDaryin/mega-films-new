import { useFilms } from './store/useFilms';

import { Card } from '@/components/Card';

const CardsField = () => {
  const films = useFilms();

  return (
    <div className="grid grid-cols-cards grid-rows-cards gap-[30px] rounded-[20px] border-2 border-[#364C84] p-[30px]">
      {films instanceof Array
        ? films.map((film) => (
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
  );
};

export { CardsField };
