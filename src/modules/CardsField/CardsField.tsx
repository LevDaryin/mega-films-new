import { Card } from '@/components/Card';

const CardsField = () => {
  return (
    <div className="rounded-[20px] border-2 border-[#364C84] p-[30px]">
      <Card
        smallPosterURL={'./src/assets/filmPoster.png'}
        filmName={'Матрица'}
        year={1999}
        genre={'фантастика'}
      />
    </div>
  );
};

export { CardsField };
