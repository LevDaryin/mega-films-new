import { Header } from './Header';
import { Filters } from './Filters';
import { CardsField } from './CardsField';

const Content = () => {
  return (
    <>
      <Header />
      <div className="mt-[30px] grid grid-cols-content grid-rows-content gap-x-[30px]">
        <Filters />
        <CardsField />
      </div>
    </>
  );
};

export { Content };
