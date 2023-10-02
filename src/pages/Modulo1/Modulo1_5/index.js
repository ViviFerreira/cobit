import React from 'react';
import Layout from '../../../components/Layout';
import TitleModulo from '../../../components/TitleModulo';
import Pagination from '../../../components/Pagination';
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';
import './styles.css';

function Modulo1_5() {

	const zoomIn = {
		initial: { scale: 1 },
		animate: { opacity: 0},
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
				<TitleModulo>Sobre o CICLO DE GOVERNANÇA DE TI</TitleModulo>
				<motion.div 
				className='contentCardTextModulo1_5'
				initial="initial"
				animate="animate"
				exit="exit"
				variants={slideInFromRight}>
					<Link to='/Modulo1_2' className='cardModulo1_5'>
						<motion.div
						initial="initial"
						whileHover="hover"
						variants={zoomIn}
						>
							<ul>
								<li>1. Estrutura</li>
								<li>2. Processos</li>
								<li>3. Operação</li>
								<li>4. Gestão</li>
							</ul>
						</motion.div>
					</Link>
					<div className='textModulo1_5'>
						<p className='primaryTextModule1_5'>
							 São estabelecidas estruturas organizacionais e processos claros para
							orientar a implementação e a gestão da TI.{' '}
							<span>Definindo papéis, responsabilidades e fluxos de trabalho.</span>
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
export default Modulo1_5;
