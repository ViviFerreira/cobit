import React, { useState } from 'react';
import Layout from '../../../components/Layout';
import TitleModulo from '../../../components/TitleModulo';
import Pagination from '../../../components/Pagination';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './styles.css';

function Modulo4_2() {
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

				<div class='contentModulo4_2'>
					<Link to='/Modulo4_3'>
						<div class='cardLevel nivel0'>Nível 0</div>
					</Link>
					<Link to='/Modulo4_4'>
						<div class='cardLevel nivel1'>Nível 1</div>
					</Link>
					<Link to='/Modulo4_5'>
						<div class='cardLevel nivel2'>Nível 2</div>
					</Link>
					<Link to='/Modulo4_6'>
						<div class='cardLevel nivel3'>Nível 3</div>
					</Link>
					<Link to='/Modulo4_7'>
						<div class='cardLevel nivel4'>Nível 4</div>
					</Link>
					<Link to='/Modulo4_8'>
						<div class='cardLevel nivel5'>Nível 5</div>
					</Link>
				</div>
			</motion.div>
			<Pagination up='/Modulo4_1' down='/Modulo4_3' />
		</Layout>
	);
}
export default Modulo4_2;
