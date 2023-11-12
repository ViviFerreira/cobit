import React from 'react';
import Layout from '../../../components/Layout';
import TitleModulo from '../../../components/TitleModulo';
import Pagination from '../../../components/Pagination';
import imgModulo2_1 from '../../../assets/img/ImgModulo2_1.png';
import { motion } from 'framer-motion';
import './styles.css';

function Modulo2_1() {
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
				<div className='contentModulo2_1'>
					<div className='descriptionModulo2_1'>
						Existem dois conjuntos de princípios dentro do COBIT 2019. Um conjunto de
						6 princípios para um
						<span className='highlightText'>sistema de governança,</span>e outro
						conjunto de 3 princípios para um framework de governança.
					</div>

					<div className='boxPrincipio'>
						<img src={imgModulo2_1} />
					</div>
				</div>
				<Pagination up='/Modulo2' down='/Modulo2_2' />
			</motion.div>
		</Layout>
	);
}
export default Modulo2_1;
