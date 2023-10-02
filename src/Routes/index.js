import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import PageError from '../pages/PageError';
import Maps from '../pages/Maps';
import Modulo1 from '../pages/Modulo1';
import Modulo1_1 from '../pages/Modulo1/Modulo1_1';
import Modulo1_2 from '../pages/Modulo1/Modulo1_2';
import Modulo1_3 from '../pages/Modulo1/Modulo1_3';
import Modulo1_4 from '../pages/Modulo1/Modulo1_4';
import Modulo1_5 from '../pages/Modulo1/Modulo1_5';
import Modulo1_6 from '../pages/Modulo1/modulo1_6';
import Modulo1_7 from '../pages/Modulo1/Modulo1_7';
import Modulo2_1 from '../pages/Modulo2/Modulo2_1';
import Questionario1_1 from '../pages/Questionario1/Questionario1_1';
import Questionario1_2 from '../pages/Questionario1/Questionario1_2';
import Modulo2 from '../pages/Modulo2';
import Modulo3 from '../pages/Modulo3';
import Modulo4 from '../pages/Modulo4';
import Modulo5 from '../pages/Modulo5';

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
				<Route path='/modulo1_2' element={<Modulo1_2 />} />
				<Route path='/modulo1_3' element={<Modulo1_3 />} />
				<Route path='/modulo1_4' element={<Modulo1_4 />} />
				<Route path='/modulo1_5' element={<Modulo1_5 />} />
				<Route path='/modulo1_6' element={<Modulo1_6 />} />
				<Route path='/modulo1_7' element={<Modulo1_7 />} />
				<Route path='/modulo2_1' element={<Modulo2_1 />} />
				<Route path='/modulo2_2' element={<Modulo2_1 />} />
				<Route path='/modulo2_3' element={<Modulo2_1 />} />

				<Route path='/Questionario1_1' element={<Questionario1_1 />} />
				<Route path='/modulo2' element={<Modulo2 />} />
				<Route path='/modulo3' element={<Modulo3 />} />
				<Route path='/modulo4' element={<Modulo4 />} />
				<Route path='/modulo5' element={<Modulo5 />} />
			</Routes>
		</AnimatePresence>
	);
};
