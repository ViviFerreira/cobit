import React from 'react';
import Pagination from '../Pagination';
import './styles.css';
import { motion } from 'framer-motion';
import Layout from '../Layout';

function Modulo({ number, subtitle, imgMudulo, up, down }) {
	const fadeInFromTop = {
		initial: { y: -100, opacity: 0 },
		animate: { y: 0, opacity: 1 },
		exit: { y: 100, opacity: 0 },
	};

	return (
		<Layout>
			<motion.div
				initial="initial"
				animate="animate"
				exit="exit"
				variants={fadeInFromTop}
				className='containerModulo'
			>
				<div className='circulo_1'></div>
				<div className='circulo_2'></div>
				<div className='circulo_3'></div>

				<div className='descriptionModulo'>
					<h1 className='titleModulo'>
						Você está no <strong className='bolder'>MÓDULO {number}</strong>
					</h1>
					<p className='subtitleModulo'>{subtitle}</p>
				</div>
				<img className='imgModulo' src={imgMudulo} alt={`Módulo ${number}`} />
			</motion.div>
			<Pagination up={up} down={down} />
		</Layout>
	);
}

export default Modulo;
