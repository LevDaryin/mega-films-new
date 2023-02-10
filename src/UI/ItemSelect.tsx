import { useState } from 'react';

interface Props {
  children: React.ReactNode;
  value: string;
}

const ItemSelect = ({ children }: Props) => {
  const [selectActive, setSelectActive] = useState(false);

  return (
    <li>
      <a
        className="mr-1 mb-1 block select-none rounded-[3px] border-[2px] border-[#364C84] p-[2px] text-[14px] text-white"
        style={{ borderColor: selectActive ? '#7299FF' : '#364C84' }}
        onClick={() => setSelectActive(!selectActive)}
      >
        {children}
      </a>
    </li>
  );
};

export { ItemSelect };
