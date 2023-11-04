import React from 'react';
import { usePoints } from '../../../../providers/points';
import './styles.css';
import { FaMap } from 'react-icons/fa6';
import { FaTrophy } from 'react-icons/fa6';
import { FaStar } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

function Header() {
	const { points } = usePoints();

	return (
		<header className='navBar'>
			<div className='navTitle'>
				<h1 title='Logo da equipe desenvolvedora'>
					C<span className='logo-cobit'>O</span>BITDynamiX
				</h1>
			</div>
			<div className='icons'>
				<div className='icon-1'>
					<Link to='/Mapa'>
						<FaMap size={30} color='#FFFFFF' />
					</Link>
				</div>
				<div className='icon-2'>
					<FaTrophy size={30} color='#FFFFFF' />
				</div>
				<div className='icon-3'>
					<FaStar size={30} color='#FFFFFF' />
					<span className='points'>{points}</span>
				</div>
			</div>
		</header>
	);
}
export default Header;
