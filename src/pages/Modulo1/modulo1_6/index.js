import React from 'react';
import Layout from '../../../components/Layout';
import TitleModulo from '../../../components/TitleModulo';
import Pagination from '../../../components/Pagination';
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';
import './styles.css';

function Modulo1_6() {
	const zoomIn = {
		initial: { scale: 1 },
		animate: { opacity: 0 },
		hover: { scale: 1.1 },
	};

	const slideInFromRight = {
		initial: { x: '100%', opacity: 0 },
		animate: { x: 0, opacity: 1 },
		exit: { x: '-100%', opacity: 0 },
	};
	return (
		<Layout>
			<div className='container'>
				<TitleModulo>
					Sobre o <span class='title-destaque'>CICLO DE GOVERNANÇA DE TI</span>
				</TitleModulo>
				<motion.div
					className='contentCardTextModulo1_6'
					initial='initial'
					animate='animate'
					exit='exit'
					variants={slideInFromRight}
				>
					<Link to='/Modulo1_2' className='cardModulo1_6'>
						<motion.div initial='initial' whileHover='hover' variants={zoomIn}>
							<ul>
								<li>1. Medição do valor e do desempenho</li>
							</ul>
						</motion.div>
					</Link>
					<div className='textModulo1_6'>
						<p className='primaryTextModule1_6'>
							{' '}
							Métricas e indicadores são utilizados para monitorar o progresso em
							direção aos objetivos estratégicos,{' '}
							<span>permitindo ajustes e melhorias contínuas.</span>
						</p>
					</div>
				</motion.div>
				<div>
					<Pagination up='/Modulo1_2' down='/Modulo1_7' />
				</div>
			</div>
		</Layout>
	);
}
export default Modulo1_6;
