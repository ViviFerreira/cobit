import React from 'react';
import Layout from '../../components/Layout';
import { Link } from 'react-router-dom';
import './styles.css';

import { motion } from 'framer-motion';

function Maps() {
	const slideInFromRight = {
		initial: { x: '100%', opacity: 0 },
		animate: { x: 0, opacity: 1 },
		exit: { x: '100%', opacity: 0 },
	};

	return (
		<Layout>
			<motion.div
				className='container'
				initial="initial"
				animate="animate"
				exit="exit"
				variants={slideInFromRight}
			>
				<div className='cardBackground'>
					<Link to='/Modulo1' activeClassName='is-active'>
						Modulo 1
					</Link>
					<Link to='/Modulo2' activeClassName='is-active'>
						Modulo 2
					</Link>
					<Link to='/Modulo3' activeClassName='is-active'>
						Modulo 3
					</Link>
					<Link to='/Modulo4' activeClassName='is-active'>
						Modulo 4
					</Link>
					<Link to='/Modulo5' activeClassName='is-active'>
						Modulo 5
					</Link>
				</div>
			</motion.div>
		</Layout>
	);
}

export default Maps;
