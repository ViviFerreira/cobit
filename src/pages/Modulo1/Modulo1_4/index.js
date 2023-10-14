import React from 'react';
import Layout from '../../../components/Layout';
import TitleModulo from '../../../components/TitleModulo';
import Pagination from '../../../components/Pagination';
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';
import './styles.css';

function Modulo1_4() {
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
					className='contentCardTextModulo1_4'
					initial='initial'
					animate='animate'
					exit='exit'
					variants={slideInFromRight}
				>
					<Link to='/Modulo1_2' className='cardModulo1_4'>
						<motion.div initial='initial' whileHover='hover' variants={zoomIn}>
							<ul>
								<li>1. Decisão</li>
								<li>2. Compromisso</li>
								<li>3. Priorização</li>
								<li>4. Alocação de recursos</li>
							</ul>
						</motion.div>
					</Link>
					<div className='textModulo1_4'>
						<p className='primaryTextModule1_4'>
							A fase de decisão envolve escolhas informadas{' '}
							<span>sobre investimentos em tecnologia e recursos</span>. Isso inclui
							avaliar as opções disponíveis,{' '}
							<span>identificar riscos e tomar decisões baseadas em dados</span> para
							aumentar os benefícios e diminuir os riscos
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
export default Modulo1_4;
