import React from 'react';
import Layout from '../../../components/Layout';
import imgModulo1_7 from '../../../assets/img/imgModulo1_7.png';
import Pagination from '../../../components/Pagination';
import TitleModulo from '../../../components/TitleModulo';

import { motion } from 'framer-motion';
import './styles.css';

function Modulo1_7() {
	const fadeInFromTop = {
		initial: { y: -100, opacity: 0 },
		animate: { y: 0, opacity: 1 },
		exit: { y: 100, opacity: 0 },
	};

	return (
		<Layout>
			<TitleModulo>
				O que é <span class='title-destaque'>COBIT 2019?</span>
			</TitleModulo>
			<motion.div
				className='container'
				initial='initial'
				animate='animate'
				exit='exit'
			>
				<div className='contentTextImgModule1_7'>
					<div className='textExpModule1_7'>
						<p>
							<span>COBIT</span> significa Control Objectives for Information and
							Related Technologies ou Controle Objectives for Information and Related
							Technologies em português
						</p>
						<p>
							Amplamente utilizado em organizações para ajudar a garantir a{' '}
							<span>
								eficácia, eficiência, segurança e conformidade nos processos.
							</span>
						</p>
					</div>
					<div className='circulo1Modulo1_7'>
						<p>Framework de governança</p>
					</div>
					<div className='circulo2Modulo1_7'>
						<p>Um guia para as organizações</p>
					</div>
					<div className='circulo3Modulo1_7'>
						<p>Criado pelo ISACA</p>
					</div>
					<div className='circulo4Modulo1_7'>
						<p>Gestão de recursos de TI</p>
					</div>
					<div className='imgModulo1_7'>
						<img src={imgModulo1_7}></img>
					</div>
				</div>
			</motion.div>
			<Pagination up='/Modulo1_2' down='/Questionario1_1' />
		</Layout>
	);
}
export default Modulo1_7;
