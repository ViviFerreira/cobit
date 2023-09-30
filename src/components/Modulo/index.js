import React from 'react';
import Pagination from '../Pagination';
import './styles.css';

import { motion } from 'framer-motion';
import Layout from '../Layout';

function Modulo({ number, subtitle, imgMudulo, up, down }) {
	return (
		<Layout>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
			>
				<div className='circulo_1'>1</div>
				<div className='circulo_2'>2</div>
				<div className='circulo_3'>3</div>
				<div className='containerModulo'>
					<div className='descriptionModulo'>
						<h1 className='titleModulo'>
							Você está no <strong className='bolder'>MÓDULO {number}</strong>
						</h1>
						<p className='subtitleModulo'>{subtitle}</p>
					</div>
					<img className='imgModulo' src={imgMudulo}></img>
				</div>

				<Pagination up={up} down={down} />
			</motion.div>
		</Layout>
	);
}
export default Modulo;
