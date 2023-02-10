import { useItems } from '@/UI/helpers/useItems';

import { Title } from '../../UI/Title';
import { NameFilter } from '@/components/NameFilter';
import { ChoiceFilter } from '@/components/ChoiceFilter';
import { YearFilter } from '@/components/YearFilter';

const Filters = () => {
  const { genres, country } = useItems();

  return (
    <div className="relative rounded-[20px] border-2 border-[#364C84] p-[20px]">
      <Title>Фильтры</Title>
      <NameFilter title={'Название:'} />
      <ChoiceFilter title={'Жанры:'} items={genres} />
      <ChoiceFilter title={'Страны:'} items={country} />
      <YearFilter title={'Год выпуска:'} />
    </div>
  );
};

export { Filters };
