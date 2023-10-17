import React, { useState } from 'react';
import Layout from '../../../components/Layout';
import TitleModulo from '../../../components/TitleModulo';
import Pagination from '../../../components/Pagination';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Modulo4_8() {
	const fadeInFromTop = {
		initial: { y: -100, opacity: 0 },
		animate: { y: 0, opacity: 1 },
		exit: { y: 100, opacity: 0 },
	};

	return (
		<Layout>
			<motion.div
				className='container'
				initial='initial'
				animate='animate'
				exit='exit'
				variants={fadeInFromTop}
			>
				<TitleModulo>
					<span class='title-destaque'>Cobit Process Model </span>
				</TitleModulo>

				<Link to='/Modulo4_2'>
					<div className='containerModulo4_3'>
						<div class='title color5'>Nível 5</div>
						<div class='description'>
							O processo atinge claramente seus objetivos e é avaliado
							quantitativamente, incentivando melhorias contínuas.
						</div>
					</div>
				</Link>
			</motion.div>
			<Pagination up='/Modulo4_2' down='/Questionario4_1' />
		</Layout>
	);
}
export default Modulo4_8;
