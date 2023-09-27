import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

// Icones usados
import { FaCircleChevronUp } from 'react-icons/fa6';
import { FaCircleChevronDown } from 'react-icons/fa6';

function pagination() {
	return (
		<div className='pagination'>
            <Link to=''>
                <FaCircleChevronUp size={30} color='gray'/>
            </Link>
            <Link to=''>
                <FaCircleChevronDown size={30} color='gray'/>
            </Link>
        </div>
	);
}
export default pagination;
