import React from 'react';
import Layout from '../../../components/Layout';
import TitleModulo from '../../../components/TitleModulo';
import Pagination from '../../../components/Pagination';
import { motion } from 'framer-motion';
import './styles.css';

function Modulo2_4() {
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
					<div className='numero'>3</div>
					<div className='conteudo'>
						<p>
							A criação de um sistema de governança dinâmico refletirá o estado real
							das coisas e, então, essa visão dinâmica criará um sistema que é viável e
							reduz o risco, diminuindo problemas futuros se houver uma visão dinâmica
							de toda a empresa e seus sistemas de TI .
						</p>
					</div>
				</div>
				<div class='progress-bar3'></div>
				<Pagination up='/Modulo2_3' down='/Modulo2_5' />
			</motion.div>
		</Layout>
	);
}
export default Modulo2_4;
