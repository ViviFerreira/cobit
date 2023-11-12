import React from 'react';
import Layout from '../../../components/Layout';
import TitleModulo from '../../../components/TitleModulo';
import Pagination from '../../../components/Pagination';
import imgModulo2_8 from '../../../assets/img/ImgModulo2_8.png';
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
						6 princípios para um sistema de governança, outro conjunto de 3 princípios
						para um <span className='highlightText'>framework de governança</span>.
					</div>

					<div className='boxPrincipio'>
						<img src={imgModulo2_8} />
					</div>
				</div>
				<Pagination up='/Modulo2_7' down='/Modulo2_9' />
			</motion.div>
		</Layout>
	);
}
export default Modulo2_1;
