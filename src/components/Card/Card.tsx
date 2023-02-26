import { RatingLabel } from '@/UI/RatingLabel';

import posterNotFound from '../../assets/posterNotFound.png';

interface Props {
  smallPosterURL: string;
  filmName: string;
  year: number | string;
  genres: { genre: string }[] | [];
  rating: number | string;
}

const Card = ({ smallPosterURL, filmName, year, genres, rating }: Props) => {
  const smallPoster = smallPosterURL ? smallPosterURL : posterNotFound;
  const name = filmName ? filmName : 'Без названия';
  const genre = genres[0] ? genres[0].genre : '-';

  return (
    <div className="relative mr-[30px] mb-[30px] h-[257px] w-[150px] rounded-[20px] border-[3px] border-[#364C84] bg-[#CACACA] p-[18px] transition-transform hover:translate-y-[-3px]">
      <RatingLabel rating={rating} />
      <img
        src={smallPoster}
        alt="small film poster"
        height={170}
        width={115}
        className="mx-auto mb-[10px] h-[170px] w-[115px] object-contain"
      />
      <h3 className="mb-[5px] truncate text-center align-middle text-[12px] font-normal leading-[15px]">
        {name}
      </h3>
      <p className="text-center text-[10px] text-[#6B6A6A]">{`${year}, ${genre}`}</p>
    </div>
  );
};

export { Card };
