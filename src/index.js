import React from 'react';
import { PointsProvider } from './providers/points';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
	<React.StrictMode>
		<PointsProvider>
			<App />
		</PointsProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
