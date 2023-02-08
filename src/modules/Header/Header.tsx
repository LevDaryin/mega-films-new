import { Link } from 'react-router-dom';

import SiteLogo from '../../assets/logo.svg';

const Header = () => {
  return (
    <Link to="/">
      <img src={SiteLogo} alt="Mega-film logo" />
      <div className="shadow-lg mt-[24px] h-[4px] w-[1020px] bg-[#6590FF] shadow-specific" />
    </Link>
  );
};

export { Header };
