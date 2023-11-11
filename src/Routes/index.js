import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Login from '../pages/login/Login';
import Cadastro from '../pages/login/Cadastro';
import Home from '../pages/Home';
import PageError from '../pages/PageError';
import Mapa from '../pages/Mapa';
import Rank from '../pages/Rank';


import Modulo1 from '../pages/Modulo1';
import Modulo1_1 from '../pages/Modulo1/Modulo1_1';
import Modulo1_2 from '../pages/Modulo1/Modulo1_2';
import Modulo1_3 from '../pages/Modulo1/Modulo1_3';
import Modulo1_4 from '../pages/Modulo1/Modulo1_4';
import Modulo1_5 from '../pages/Modulo1/Modulo1_5';
import Modulo1_6 from '../pages/Modulo1/modulo1_6';
import Modulo1_7 from '../pages/Modulo1/Modulo1_7';

import Modulo2 from '../pages/Modulo2';
import Modulo2_1 from '../pages/Modulo2/Modulo2_1';
import Modulo2_2 from '../pages/Modulo2/Modulo2_2';
import Modulo2_3 from '../pages/Modulo2/Modulo2_3';
import Modulo2_4 from '../pages/Modulo2/Modulo2_4';
import Modulo2_5 from '../pages/Modulo2/Modulo2_5';
import Modulo2_6 from '../pages/Modulo2/Modulo2_6';
import Modulo2_7 from '../pages/Modulo2/Modulo2_7';
import Modulo2_8 from '../pages/Modulo2/Modulo2_8';
import Modulo2_9 from '../pages/Modulo2/Modulo2_9';
import Modulo2_10 from '../pages/Modulo2/Modulo2_10';
import Modulo2_11 from '../pages/Modulo2/Modulo2_11';

import Modulo3 from '../pages/Modulo3';
import Modulo3_1 from '../pages/Modulo3/Modulo3_1';
import Modulo3_2 from '../pages/Modulo3/Modulo3_2';
import Modulo3_3 from '../pages/Modulo3/Modulo3_3';
import Modulo3_4 from '../pages/Modulo3/Modulo3_4';
import Modulo3_5 from '../pages/Modulo3/Modulo3_5';
import Modulo3_6 from '../pages/Modulo3/Modulo3_6';
import Modulo3_7 from '../pages/Modulo3/Modulo3_7';
import Modulo3_8 from '../pages/Modulo3/Modulo3_8';
import Modulo3_9 from '../pages/Modulo3/Modulo3_9';
import Modulo3_10 from '../pages/Modulo3/Modulo3_10';
import Modulo3_11 from '../pages/Modulo3/Modulo3_11';
import Modulo3_12 from '../pages/Modulo3/Modulo3_12';
import Modulo3_13 from '../pages/Modulo3/Modulo3_13';

import Modulo4 from '../pages/Modulo4';
import Modulo4_1 from '../pages/Modulo4/Modulo4_1';
import Modulo4_2 from '../pages/Modulo4/Modulo4_2';
import Modulo4_3 from '../pages/Modulo4/Modulo4_3';
import Modulo4_4 from '../pages/Modulo4/Modulo4_4';
import Modulo4_5 from '../pages/Modulo4/Modulo4_5';
import Modulo4_6 from '../pages/Modulo4/Modulo4_6';
import Modulo4_7 from '../pages/Modulo4/Modulo4_7';
import Modulo4_8 from '../pages/Modulo4/Modulo4_8';

import Modulo5 from '../pages/Modulo5';
import Modulo5_1 from '../pages/Modulo5/Modulo5_1';
import Modulo5_2 from '../pages/Modulo5/Modulo5_2';
import Modulo5_3 from '../pages/Modulo5/Modulo5_3';
import Modulo5_4 from '../pages/Modulo5/Modulo5_4';
import Modulo5_5 from '../pages/Modulo5/Modulo5_5';
import Modulo5_6 from '../pages/Modulo5/Modulo5_6';
import Modulo5_7 from '../pages/Modulo5/Modulo5_7';
import Modulo5_8 from '../pages/Modulo5/Modulo5_8';
import Modulo5_9 from '../pages/Modulo5/Modulo5_9';

import Questionario1_1 from '../pages/Questionario1/Questionario1_1';
import Questionario1_2 from '../pages/Questionario1/Questionario1_2';

import Questionario2_1 from '../pages/Questionario2/Questionario2_1';
import Questionario2_2 from '../pages/Questionario2/Questionario2_2';

import Questionario3_1 from '../pages/Questionario3/Questionario3_1';
import Questionario3_2 from '../pages/Questionario3/Questionario3_2';

import Questionario4_1 from '../pages/Questionario4/Questionario4_1';
import Questionario4_2 from '../pages/Questionario4/Questionario4_2';


import Questionario5_1 from '../pages/Questionario5/Questionario5_1';
import Questionario5_2 from '../pages/Questionario5/Questionario5_2';


import { AnimatePresence } from 'framer-motion';

export default () => {
	const location = useLocation();

	return (
		<AnimatePresence mode='wait'>
			<Routes location={location} key={location.pathname}>
				<Route path='/' element={<Login />} /> 
				<Route path='/Home' element={<Home />} /> 
				<Route path='/Cadastro' element={<Cadastro />} /> 
				<Route path='/Mapa' element={<Mapa />} />
				<Route path='/Rank' element={<Rank />} />
				<Route path='*' element={<PageError />} />

				<Route path='/modulo1' element={<Modulo1 />} />
				<Route path='/modulo1_1' element={<Modulo1_1 />} />
				<Route path='/modulo1_2' element={<Modulo1_2 />} />
				<Route path='/modulo1_3' element={<Modulo1_3 />} />
				<Route path='/modulo1_4' element={<Modulo1_4 />} />
				<Route path='/modulo1_5' element={<Modulo1_5 />} />
				<Route path='/modulo1_6' element={<Modulo1_6 />} />
				<Route path='/modulo1_7' element={<Modulo1_7 />} />

				<Route path='/modulo2' element={<Modulo2 />} />
				<Route path='/modulo2_1' element={<Modulo2_1 />} />
				<Route path='/modulo2_2' element={<Modulo2_2 />} />
				<Route path='/modulo2_3' element={<Modulo2_3 />} />
				<Route path='/modulo2_4' element={<Modulo2_4 />} />
				<Route path='/modulo2_5' element={<Modulo2_5 />} />
				<Route path='/modulo2_6' element={<Modulo2_6 />} />
				<Route path='/modulo2_7' element={<Modulo2_7 />} />
				<Route path='/modulo2_8' element={<Modulo2_8 />} />
				<Route path='/Modulo2_9' element={<Modulo2_9 />} />
				<Route path='/modulo2_10' element={<Modulo2_10 />} />
				<Route path='/modulo2_11' element={<Modulo2_11 />} />

				<Route path='/modulo3' element={<Modulo3 />} />
				<Route path='/modulo3_1' element={<Modulo3_1 />} />
				<Route path='/Modulo3_2' element={<Modulo3_2 />} />
				<Route path='/Modulo3_3' element={<Modulo3_3 />} />
				<Route path='/Modulo3_4' element={<Modulo3_4 />} />
				<Route path='/Modulo3_5' element={<Modulo3_5 />} />
				<Route path='/Modulo3_6' element={<Modulo3_6 />} />
				<Route path='/Modulo3_7' element={<Modulo3_7 />} />
				<Route path='/Modulo3_8' element={<Modulo3_8 />} />
				<Route path='/Modulo3_9' element={<Modulo3_9 />} />
				<Route path='/Modulo3_10' element={<Modulo3_10 />} />
				<Route path='/Modulo3_11' element={<Modulo3_11 />} />
				<Route path='/Modulo3_12' element={<Modulo3_12 />} />
				<Route path='/Modulo3_13' element={<Modulo3_13 />} />

				<Route path='/modulo4' element={<Modulo4 />} />
				<Route path='/Modulo4_1' element={<Modulo4_1 />} />
				<Route path='/Modulo4_2' element={<Modulo4_2 />} />
				<Route path='/Modulo4_3' element={<Modulo4_3 />} />
				<Route path='/Modulo4_4' element={<Modulo4_4 />} />
				<Route path='/Modulo4_5' element={<Modulo4_5 />} />
				<Route path='/Modulo4_6' element={<Modulo4_6 />} />
				<Route path='/Modulo4_7' element={<Modulo4_7 />} />
				<Route path='/Modulo4_8' element={<Modulo4_8 />} />

				<Route path='/modulo5' element={<Modulo5 />} />
				<Route path='/Modulo5_1' element={<Modulo5_1 />} />
				<Route path='/Modulo5_2' element={<Modulo5_2 />} />
				<Route path='/Modulo5_3' element={<Modulo5_3 />} />
				<Route path='/Modulo5_4' element={<Modulo5_4 />} />
				<Route path='/Modulo5_5' element={<Modulo5_5 />} />
				<Route path='/Modulo5_6' element={<Modulo5_6 />} />
				<Route path='/Modulo5_7' element={<Modulo5_7 />} />
				<Route path='/Modulo5_8' element={<Modulo5_8 />} />
				<Route path='/Modulo5_9' element={<Modulo5_9 />} />

				<Route path='/Questionario1_1' element={<Questionario1_1 />} />
				<Route path='/Questionario1_2' element={<Questionario1_2 />} />

				<Route path='/Questionario2_1' element={<Questionario2_1 />} />
				<Route path='/Questionario2_2' element={<Questionario2_2 />} />

				<Route path='/Questionario3_1' element={<Questionario3_1 />} />
				<Route path='/Questionario3_2' element={<Questionario3_2 />} />

				<Route path='/Questionario4_1' element={<Questionario4_1 />} />
				<Route path='/Questionario4_2' element={<Questionario4_2 />} />

				<Route path='/Questionario5_1' element={<Questionario5_1 />} />
				<Route path='/Questionario5_2' element={<Questionario5_2 />} />
			</Routes>
		</AnimatePresence>
	);
};
