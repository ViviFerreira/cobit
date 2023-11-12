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
					Princípios de um <span>Sistema de Governança</span>
				</h1>

				<div className='boxModulo2'>
					<div className='numero'>1</div>
					<div className='conteudo'>
						<p>
							Esse princípio afirma que cada empresa requer um sistema de governança
							para atender as necessidades das partes interessadas e gerar valor
							através do uso de Tecnologia e informação. Valor, no contexto da
							governança, significa um equilíbrio entre benefícios, riscos e recursos.
						</p>
					</div>
				</div>
				<div class='progress-bar1'></div>
				<Pagination up='/Modulo2_1' down='/Modulo2_3' />
			</motion.div>
		</Layout>
	);
}
export default Modulo2_2;
