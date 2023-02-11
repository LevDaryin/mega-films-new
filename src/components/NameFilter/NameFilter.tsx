import { SmTitle } from '@/UI/SmTitle';
import { NameInput } from '@/UI/NameInput';

interface Props {
  title: string;
}

const NameFilter = ({ title }: Props) => {
  return (
    <>
      <SmTitle>{title}</SmTitle>
      <NameInput />
    </>
  );
};

export { NameFilter };
