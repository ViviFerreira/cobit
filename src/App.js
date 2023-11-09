import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import StoreProvider from './Store/Provider';

function App() {
	return (
		<BrowserRouter>
			<StoreProvider>
				<Routes />
			</StoreProvider>
		</BrowserRouter>
	);
}

export default App;
