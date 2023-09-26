import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

// Icones usados
import { FaPlayCircle } from 'react-icons/fa';

function ButtonStart() {
	return (
		<div className='buttonStart'>
			<Link to='/Maps' className='button' activeClassName='is-active'>
				<FaPlayCircle className='FaPlayCircle' size={35} color='#fff' />
				<span className='texto'>Começar</span>
			</Link>
		</div>
	);
}
export default ButtonStart;
