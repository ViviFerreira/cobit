import React from 'react';
import Layout from '../../../components/Layout';
import TitleModulo from '../../../components/TitleModulo';
import Pagination from '../../../components/Pagination';
import { motion } from 'framer-motion';
import './styles.css';

function Modulo2_5() {
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
					<div className='numero'>4</div>
					<div className='conteudo'>
						<p>
							A governança define a direção estratégica de uma empresa e, em seguida, o
							gerenciamento planeja, constrói e executa essa visão. Portanto, é
							importante distinguir entre os dois e fazer com que as atividades e
							estruturas sejam diferenciadas em seu sistema de governança.
						</p>
					</div>
				</div>
				<div class='progress-bar4'></div>
				<Pagination up='/Modulo2_4' down='/Modulo2_6' />
			</motion.div>
		</Layout>
	);
}
export default Modulo2_5;
