import React, { useState } from 'react';
import Layout from '../../components/Layout';
import ButtonMap from '../../components/ButtonMap';
import { Link } from 'react-router-dom';
import './styles.css';

import {
	BsFill1CircleFill,
	BsFill2CircleFill,
	BsFill3CircleFill,
	BsFill4CircleFill,
	BsFill5CircleFill,
} from 'react-icons/bs';
import { motion } from 'framer-motion';

function Mapa() {
	const [modulosDesbloqueados, setModulosDesbloqueados] = useState([true, false, false, false, false]);

	const slideInFromRight = {
		initial: { x: '100%', opacity: 0 },
		animate: { x: 0, opacity: 1 },
		exit: { x: '100%', opacity: 0 },
	};

	const verificarDesbloqueio = (index) => {
		return modulosDesbloqueados[index];
	};
	
	

	return (
		<Layout>
			<motion.div
				className='container'
				initial='initial'
				animate='animate'
				exit='exit'
				variants={slideInFromRight}
			>
				<div className='cardBackground'>
					<Link to='/Modulo1' activeClassName='is-active' className={`modulo1 ${verificarDesbloqueio(0) ? '' : 'bloqueado'}`}>
                        <ButtonMap
							icon={<BsFill1CircleFill size={40} color='#FFFFFF'/>}
							position={{ top: '15%', left: '15%' }}
							isClickable={verificarDesbloqueio(0)}
							onClick={() => {
							
							}}
						/>
                    </Link>

					<Link to='/Modulo2' activeClassName='is-active' className={`modulo1 ${verificarDesbloqueio(1) ? '' : 'bloqueado'}`}>
						<ButtonMap
							icon={<BsFill2CircleFill size={40} color='#FFFFFF'/>}
							position={{ top: '30%', left: '30%' }}
							isClickable={verificarDesbloqueio(1)}
						/>
					</Link>

					<Link to='/Modulo3' activeClassName='is-active' className={`modulo1 ${verificarDesbloqueio(2) ? '' : 'bloqueado'}`}>
						<ButtonMap
							icon={<BsFill3CircleFill size={40} color='#FFFFFF'/>}
							position={{ top: '45%', left: '45%' }}
							isClickable={verificarDesbloqueio(2)}
						/>
					</Link>

					<Link to='/Modulo4' activeClassName='is-active' className={`modulo1 ${verificarDesbloqueio(3) ? '' : 'bloqueado'}`}>
						<ButtonMap
							icon={<BsFill4CircleFill size={40} color='#FFFFFF'/>}
							position={{ top: '60%', left: '60%' }}
							isClickable={verificarDesbloqueio(3)}
						/>
					</Link>

					<Link to='/Modulo5' activeClassName='is-active' className={`modulo1 ${verificarDesbloqueio(4) ? '' : 'bloqueado'}`}>
						<ButtonMap
							icon={<BsFill5CircleFill size={40} color='#FFFFFF'/>}
							position={{ top: '75%', left: '75%' }}
							isClickable={verificarDesbloqueio(4)}
						/>
					</Link>
				</div>
			</motion.div>
		</Layout>
	);
}

export default Mapa;
