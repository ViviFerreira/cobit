import React from 'react';
import Layout from '../../../components/Layout';
import TitleModulo from '../../../components/TitleModulo';
import Pagination from '../../../components/Pagination';
import { motion } from 'framer-motion';
import './styles.css';

function Modulo1_3() {
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
			variants={fadeInFromTop}>
				<TitleModulo>
					<span className='title-destaque'>PRINCÍPIOS</span> do COBIT 2019
				</TitleModulo>
				<h1 className='titlePrincipio'>
					Princípios de um <span>Sistema de Governança</span>
				</h1>

				<div className='boxModulo2'>
					<div className='numero'>2</div>
					<div className='conteudo'>
						<p>
							Afirma que um sistema de governança deve ser construído a partir de
							componentes que podem ser de tipos diferentes e que devem funcionar em
							conjunto.Afirma que um sistema de governança deve ser construído a partir
							de componentes que podem ser de tipos diferentes e que devem funcionar em
							conjunto.
						</p>
					</div>
				</div>
				<div class='progress-bar2'></div>
				<Pagination up='/Modulo2_2' down='/Modulo2_4' />
			</motion.div>
		</Layout>
	);
}
export default Modulo1_3;
