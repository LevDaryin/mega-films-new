import { Routes, Route } from 'react-router';
import { MainPage } from './MainPage';

const Rounting = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
};

export { Rounting };
