import React from 'react';
import Layout from '../../../components/Layout';
import TitleModulo from '../../../components/TitleModulo';
import Pagination from '../../../components/Pagination';
import { motion } from 'framer-motion';
import './styles.css';

function Modulo2_2() {
	const fadeInFromTop = {
		initial: { y: -100, opacity: 0 },
		animate: { y: 0, opacity: 1 },
		exit: { y: 100, opacity: 0 },
	};
	return (
		<Layout>
			<motion.div className='container'
			initial='initial'
			animate='animate'
			exit='exit'
			variants={fadeInFromTop}>
				<TitleModulo>
					<span className='title-destaque'>PRINCÍPIOS</span> do COBIT 2019
				</TitleModulo>
				<h1 className='titlePrincipio'>
					Princípios de um <span>Framework de Governança</span>
				</h1>

				<div className='boxModulo2'>
					<div className='numero'>1</div>
					<div className='conteudo'>
						<p>
							O COBIT 2019 reconhece que um framework de governança deve ser baseado em
							um modelo conceitual. Este modelo deve identificar os principais
							componentes e relacionamentos entre os componentes.
						</p>
					</div>
				</div>
				<div class='progress-bar7'></div>
				<Pagination up='/Modulo2_8' down='/Modulo2_10' />
			</motion.div>
		</Layout>
	);
}
export default Modulo2_2;
