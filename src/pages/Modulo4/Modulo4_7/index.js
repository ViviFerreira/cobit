import React, { useState } from 'react';
import Layout from '../../../components/Layout';
import TitleModulo from '../../../components/TitleModulo';
import Pagination from '../../../components/Pagination';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Modulo4_7() {
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
						<div class='title color4'>Nível 4</div>
						<div class='description'>
							O processo alcança seu objetivo e seu desempenho é agora avaliado de
							maneira quantitativa.
						</div>
					</div>
				</Link>
			</motion.div>
			<Pagination up='/Modulo4_2' down='/Questionario4_1' />
		</Layout>
	);
}
export default Modulo4_7;
