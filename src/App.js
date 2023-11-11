import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import { LoginProvider } from './Store/Provider';
import { PointsProvider } from './providers/points';

function App() {
	return (
		<BrowserRouter>
			<LoginProvider>
				<PointsProvider>
					<Routes />
				</PointsProvider>
			</LoginProvider>
		</BrowserRouter>
	);
}

export default App;
