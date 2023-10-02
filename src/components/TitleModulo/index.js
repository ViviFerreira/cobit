import React from 'react';
import './styles.css';

function TitleModulo({ children }) {
	return (
		<div>
			<h1 className='titlePages'>{children}</h1>
		</div>
	);
}
export default TitleModulo;
