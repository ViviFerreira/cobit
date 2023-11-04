import React from 'react';
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
	const slideInFromRight = {
		initial: { x: '100%', opacity: 0 },
		animate: { x: 0, opacity: 1 },
		exit: { x: '100%', opacity: 0 },
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
					<Link to='/Modulo1' activeClassName='is-active' className='modulo1'>
						<ButtonMap
							icon={<BsFill1CircleFill size={30} color='#FFFFFF'/>}
							position={{ top: '15%', left: '15%' }}
							/>
					</Link>

					<Link to='/Modulo2' activeClassName='is-active' className='modulo1'>
						<ButtonMap
							icon={<BsFill2CircleFill size={30} color='#FFFFFF'/>}
							position={{ top: '30%', left: '30%' }}
							/>
					</Link>

					<Link to='/Modulo3' activeClassName='is-active'>
					<ButtonMap
							icon={<BsFill3CircleFill size={30} color='#FFFFFF'/>}
							position={{ top: '45%', left: '45%' }}
							/>
					</Link>

					<Link to='/Modulo4' activeClassName='is-active'>
						<ButtonMap
							icon={<BsFill4CircleFill size={30} color='#FFFFFF'/>}
							position={{ top: '60%', left: '60%' }}
						/>
					</Link>

					<Link to='/Modulo5' activeClassName='is-active'>
						<ButtonMap
							icon={<BsFill5CircleFill size={30} color='#FFFFFF'/>}
							position={{ top: '75%', left: '75%' }}
						/>
					</Link>
				</div>
			</motion.div>
		</Layout>
	);
}

export default Mapa;
