import React from 'react';
import Layout from '../../../components/Layout';
import TitleModulo from '../../../components/TitleModulo';
import Pagination from '../../../components/Pagination';
import { motion } from 'framer-motion';
import './styles.css';

function Modulo2_7() {
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
					<div className='numero'>6</div>
					<div className='conteudo'>
						<p>
							O sistema de governança não pode ser concentrado só no departamento de
							TI. Ele precisa incluir toda a tecnologia e informações localizadas
							dentro da empresa e utilizadas nos negócios para atingir as metas e
							objetivos de negócios.
						</p>
					</div>
				</div>
				<div class='progress-bar6'></div>
				<Pagination up='/Modulo2_6' down='/Modulo2_8' />
			</motion.div>
		</Layout>
	);
}
export default Modulo2_7;
