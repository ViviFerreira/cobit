import React from 'react';
import Layout from '../../../components/Layout';
import TitleModulo from '../../../components/TitleModulo';
import Pagination from '../../../components/Pagination';
import imgModulo3_7 from '../../../assets/img/imgModulo3_7.png';
import { motion } from 'framer-motion';
import './styles.css';

function Modulo3_7() {
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
					<span class='title-destaque'>Domínos</span>
				</TitleModulo>

				<div className='contentModulo3_7'>
					<div className='imgModulo3_7'>
						<img src={imgModulo3_7}></img>
					</div>

					<div className='textModulo3_7'>
						<div>
							<p className='textOneModule3_7'>A tabela a seguir mostra os 37 processos de TI relativos a cada um dos domínios do COBIT</p>
						</div>
					</div>
					
				</div>
			</motion.div>
			<Pagination up='/Modulo3_1' down='/Modulo3_8' />
		</Layout>
	);
}
export default Modulo3_7;
