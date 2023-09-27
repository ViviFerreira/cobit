import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
// Icones usados
import { FaCircleChevronUp } from 'react-icons/fa6';

function PaginationUP({ link }) {
	return (
		<Link to={link}>
			<div className='paginationUP'>
				<FaCircleChevronUp size={30} color='gray' />
			</div>
		</Link>
	);
}
export default PaginationUP;
