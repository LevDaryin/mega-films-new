type Film = {
  kinopoiskId: number;
  imdbId: string;
  nameRu: string;
  nameEn: null | string;
  nameOriginal: string;
  countries: { country: string }[];
  genres: { genre: string }[];
  ratingKinopoisk: number;
  ratingImdb: number;
  year: number;
  type: string;
  posterUrl: string;
  posterUrlPreview: string;
};

type FilmsState = {
  status: 'idle' | 'loading' | 'rejected' | 'received';
  error: string | null | undefined;
  list: Film[] | unknown;
};

export type { Film, FilmsState };
