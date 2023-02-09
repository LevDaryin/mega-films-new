import { CardsField } from './CardsField';
import { Filters } from './Filters';

const Content = () => {
  return (
    <div className="mt-[30px] grid grid-cols-specific grid-rows-specific gap-x-[30px]">
      <CardsField />
      <Filters />
    </div>
  );
};

export { Content };
