import { SmTitle } from '@/UI/SmTitle';
import { ItemSelect } from '../../UI/ItemSelect';

interface Props {
  title: string;
  items: string[];
}

const ChoiceFilter = ({ title, items }: Props) => {
  return (
    <>
      <SmTitle>{title}</SmTitle>
      <ul className="flex flex-wrap">
        {items.map((item) => (
          <ItemSelect key={item} value={item}>
            {item}
          </ItemSelect>
        ))}
      </ul>
    </>
  );
};

export { ChoiceFilter };
