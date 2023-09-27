import React from 'react';
import './styles.css';

// Icones usados

import { FaCircleChevronDown } from 'react-icons/fa6';

function PaginationDown() {
	return (
		<div className='paginationDown'>
            <FaCircleChevronDown size={30} color='gray'/>
        </div>
	);
}
export default PaginationDown;
