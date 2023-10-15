import React from 'react';
import Layout from '../../../components/Layout';
import TitleModulo from '../../../components/TitleModulo';
import Pagination from '../../../components/Pagination';
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';
import './styles.css';

function Modulo1_3() {
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
					className='contentCardTextModulo1_3'
					initial='initial'
					animate='animate'
					exit='exit'
					variants={slideInFromRight}
				>
					<Link to='/Modulo1_2' className='cardModulo1_3'>
						<motion.div initial='initial' whileHover='hover' variants={zoomIn}>
							<ul>
								<li>1. Alinhamento estratégico</li>
								<li>2. Compliance</li>
							</ul>
						</motion.div>
					</Link>
					<div className='textModulo1_3'>
						<p className='primaryTextModule1_3'>
							{' '}
							O ponto de partida primordial é assegurar que as iniciativas e os
							cronogramas dos projetos de TI{' '}
							<div className='highlightText'>
								estejam completamente alinhados com as decisões estratégicas da empresa.
							</div>
						</p>
						<p className='secondaryTextModule1_3'>
							Identificar os objetivos de negócios e como a TI pode apoiar esses
							objetivos, seja através da melhoria de processos, desenvolvimento de
							produtos ou expansão de serviços.
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
export default Modulo1_3;
