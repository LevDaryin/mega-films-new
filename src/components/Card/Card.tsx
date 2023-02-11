import { RatingLabel } from '@/UI/RatingLabel';

import posterNotFound from '../../assets/posterNotFound.png';

interface Props {
  smallPosterURL: string;
  filmName: string;
  year: number | string;
  genre: string;
}

const Card = ({ smallPosterURL, filmName, year, genre }: Props) => {
  const smallPoster = smallPosterURL ? smallPosterURL : posterNotFound;

  return (
    <div className="relative h-[257px] w-[150px] rounded-[20px] border-[3px] border-[#364C84] bg-[#CACACA] p-[18px] transition-transform hover:translate-y-[-3px]">
      <RatingLabel rating={10} />
      <img
        src={smallPoster}
        alt="small film poster"
        height={170}
        width={115}
        className="mx-auto mb-[10px]"
      />
      <h3 className="text-center mb-[5px] align-middle text-[12px] font-normal leading-[15px]">
        {filmName}
      </h3>
      <p className="text-center relative bottom-0 text-[10px] text-[#6B6A6A]">{`${year}, ${genre}`}</p>
    </div>
  );
};

export { Card };
