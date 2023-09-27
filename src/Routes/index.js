import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import PageError from '../pages/PageError';
import Maps from '../pages/Maps';
import Modulo1 from '../pages/Modulo1';
import Modulo1_1 from '../pages/Modulo1/Modulo1_1';

import { AnimatePresence } from 'framer-motion';

export default () => {
  const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<PageError />} />
        <Route path='/maps' element={<Maps />} />
        <Route path='/modulo1' element={<Modulo1 />} />
        <Route path='/modulo1_1' element={<Modulo1_1 />} />
      </Routes>
    </AnimatePresence>
  );
};
