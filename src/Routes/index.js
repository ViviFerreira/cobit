import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import PageError from '../pages/PageError';
import Maps from '../pages/Maps';

export default () => (
	<Routes>
		<Route path='/' element={<Home />} />
		<Route path='*' element={<PageError />} />
		<Route path='/maps' element={<Maps />} />
	</Routes>
);
