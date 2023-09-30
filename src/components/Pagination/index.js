import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import { FaCircleChevronUp } from 'react-icons/fa6';
import { FaCircleChevronDown } from 'react-icons/fa6';

function Pagination({ up, down }) {
	return (
		<>
			<Link to={up}>
				<div className='paginationUP'>
					<FaCircleChevronUp size={30} color='#142d64' />
				</div>
			</Link>
			<Link to={down}>
				<div className='paginationDown'>
					<FaCircleChevronDown size={30} color='#142d64' />
				</div>
			</Link>
		</>
	);
}
export default Pagination;
