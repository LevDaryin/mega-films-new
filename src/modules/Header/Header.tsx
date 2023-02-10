import { Link } from 'react-router-dom';

import SiteLogo from '../../assets/logo.svg';

const Header = () => {
  return (
    <div className="grid grid-cols-header grid-rows-header">
      <Link to="/">
        <img src={SiteLogo} alt="Mega-film logo" className="inline" />
      </Link>
      <div className="shadow-lg col-start-1 col-end-2 row-span-2  mt-[10px] h-[4px] w-[1020px] bg-[#6590FF] shadow-specific" />
    </div>
  );
};

export { Header };

// Нужно продумать исправление линка
