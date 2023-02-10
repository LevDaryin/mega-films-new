import { useState } from 'react';

const NameInput = () => {
  const [nameValue, setNameValue] = useState('');

  const nameValueHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameValue(event.target.value);
  };

  return (
    <input
      className="h-[36px] w-[200px] rounded-[10px] p-[8px] focus-visible:outline-none"
      maxLength={24}
      value={nameValue}
      onChange={nameValueHandler}
    />
  );
};

export { NameInput };
