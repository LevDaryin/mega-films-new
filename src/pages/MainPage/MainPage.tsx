import { useState } from 'react';

import { Wrapper } from '../Wrapper';
import { Header } from '../../modules/Header';
import { Filters } from '../../modules/Filters';
import { CardsField } from '../../modules/CardsField';


import { Film } from '@/store/types';

const MainPage = () => {
  const [currentItems, setCurrentItems] = useState<Film[] | null>(null);

  return (
    <Wrapper>
      <Header />
      <div className="mt-[30px] grid grid-cols-content grid-rows-content gap-x-[30px] gap-y-[15px]">
        <Filters />
        <CardsField />
      </div>
    </Wrapper>
  );
};

export { MainPage };
