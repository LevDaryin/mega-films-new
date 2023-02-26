interface Props {
  rating: number | string;
}

const RatingLabel = ({ rating }: Props) => {
  const pickRatingColor = (rating: number) => {
    if (rating >= 7) {
      return '#01AA12';
    } else if (rating <= 7 && rating >= 5) {
      return '#717171';
    } else {
      return '#BF0000';
    }
  };

  const ratingColor =
    typeof rating === 'number' ? pickRatingColor(rating) : '#717171';

  return (
    <div
      className="absolute top-[-2px] left-[-2px] rounded-br-[20px] rounded-tl-[20px] border-[2px] border-[#364C84] px-[16px] py-[1px] text-[10px] text-white"
      style={{ backgroundColor: ratingColor }}
    >
      {rating ? rating : '-'}
    </div>
  );
};

export { RatingLabel };
