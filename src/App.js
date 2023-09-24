import { Outlet, BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

function App() {
	return (
		<BrowserRouter>
			<Outlet />
			<Routes />
		</BrowserRouter>
	);
}

export default App;
