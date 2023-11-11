import React, { useEffect } from 'react';
import { useAplication } from '../../../../providers/points';
import { useLogin } from '../../../../Store/Provider';
import './styles.css';
import {
	FaMap,
	FaTrophy,
	FaStar,
	FaArrowRightFromBracket,
	FaRankingStar
} from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function Header() {
	const { points, completeQuestions } = useAplication();
	const { idUsuario, setIdUsuario } = useLogin();
	const navigate = useNavigate();

	let trophies = 0;

	for (let i = 0; i < completeQuestions.length; i++) {
		if (completeQuestions[i] == true) {
			trophies += 1;
		}
	}

	function sair() {
		localStorage.clear();
		setIdUsuario(0);
		navigate('/');
	}

	return (
		<header className='navBar'>
			<Link to='/' className='navTitle'>
				<h1 title='Logo da equipe desenvolvedora'>
					C<span className='logo-cobit'>O</span>BITDynamiX
				</h1>
			</Link>
			<div className='icons'>
				<div className='icon-1'>
					<Link to="/Rank">
						<FaRankingStar size={30} color='#FFFFFF' />
					</Link>
				</div>
				<div className='icon-2'>
					<Link to='/Mapa'>
						<FaMap size={30} color='#FFFFFF' />
					</Link>
				</div>
				<div className='icon-3'>
					<FaTrophy size={30} color='#FFFFFF' />
					<span className='points'>{trophies}</span>
				</div>
				<div className='icon-4'>
					<FaStar size={30} color='#FFFFFF' />
					<span className='points'>{points}</span>
				</div>
				{idUsuario > 0 && (
					<div className='icon-5' onClick={sair}>
						<FaArrowRightFromBracket size={30} color='#FFFFFF' />
					</div>
				)}
			</div>
		</header>
	);
}
export default Header;
