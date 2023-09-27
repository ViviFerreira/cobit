import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import PageError from '../pages/PageError';
import Maps from '../pages/Maps';
import Modulo1 from '../pages/Modulo1';

export default () => (
	<Routes>
		<Route path='/' element={<Home />} />
		<Route path='*' element={<PageError />} />
		<Route path='/maps' element={<Maps />} />
		<Route path='/modulo1' element={<Modulo1 />} />
	</Routes>
);
