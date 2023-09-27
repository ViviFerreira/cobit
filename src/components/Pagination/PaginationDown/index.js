import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

// Icones usados

import { FaCircleChevronDown } from 'react-icons/fa6';

function PaginationDown({ link }) {
	return (
		<Link to={link}>
			<div className='paginationDown'>
				<FaCircleChevronDown size={30} color='gray' />
			</div>
		</Link>
	);
}
export default PaginationDown;
