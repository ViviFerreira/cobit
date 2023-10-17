import React, { useState } from 'react';
import Layout from '../../../components/Layout';
import TitleModulo from '../../../components/TitleModulo';
import Pagination from '../../../components/Pagination';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Modulo4_5() {
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
						<div class='title color2'>Nível 2</div>
						<div class='description'>
							O processo atinge seus objetivos por meio de um conjunto fundamental de
							atividades consideradas executadas
						</div>
					</div>
				</Link>
			</motion.div>
			<Pagination up='/Modulo4_2' down='/Questionario4_1' />
		</Layout>
	);
}
export default Modulo4_5;
