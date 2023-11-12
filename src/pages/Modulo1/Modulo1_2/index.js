import React from 'react';
import Layout from '../../../components/Layout';
import TitleModulo from '../../../components/TitleModulo';
import Pagination from '../../../components/Pagination';
import setaModulo1_2 from '../../../assets/img/setaModulo1_2.png';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './styles.css';

function Modulo1_2() {
	const fadeInFromTop = {
		initial: { y: -100, opacity: 0 },
		animate: { y: 0, opacity: 1 },
		exit: { y: 100, opacity: 0 },
	};

	const zoomIn = {
		initial: { scale: 1 },
		animate: { opacity: 0 },
		hover: { scale: 1.1 },
	};

	const slideInFromRight = {
		initial: { x: '100%', opacity: 0 },
		animate: { x: 0, opacity: 1 },
		exit: { x: '100%', opacity: 0 },
	};

	return (
		<Layout>
			<TitleModulo>
				Sobre o <span class='title-destaque'>CICLO DE GOVERNANÇA DE TI</span>
			</TitleModulo>
			<motion.div
				className='container'
				initial='initial'
				animate='animate'
				exit='exit'
				variants={fadeInFromTop}
			>
				<div>
					<div>
						<p className='descriptionModulo1_2'>
							A governança de TI segue um ciclo essencial denominado "Ciclo de
							Governança de TI", que é constituído pelas seguintes fases:
						</p>
					</div>
				</div>
				<div
					className='contentImgCard'
					initial='initial'
					animate='animate'
					exit='exit'
					variants={slideInFromRight}
				>
					<div className='containerSetaModulo1_2'>
						<img className='setaModulo1_2' src={setaModulo1_2}></img>
					</div>
					<div className='listCardModulo1_2'>
						<Link to='/Modulo1_3' className='card1Modulo1_2'>
							<div initial='initial' whileHover='hover' variants={zoomIn}>
								<ul>
									<li>1. Alinhamento estratégico</li>
									<li>2. Compliance</li>
								</ul>
							</div>
						</Link>
						<Link to='/Modulo1_4' className='card2Modulo1_2'>
							<div initial='initial' whileHover='hover' variants={zoomIn}>
								<ul>
									<li>1. Decisão</li>
									<li>2. Compromisso</li>
									<li>3. Priorização</li>
									<li>4. Alocação de recursos</li>
								</ul>
							</div>
						</Link>
						<Link to='/Modulo1_5' className='card3Modulo1_2'>
							<div initial='initial' whileHover='hover' variants={zoomIn}>
								<ul>
									<li>1. Estrutura</li>
									<li>2. Processos</li>
									<li>3. Operação</li>
									<li>4. Gestão</li>
								</ul>
							</div>
						</Link>
						<Link to='/Modulo1_6' className='card4Modulo1_2'>
							<div initial='initial' whileHover='hover' variants={zoomIn}>
								<ul>
									<li>1. Medição do valor e do desempenho</li>
								</ul>
							</div>
						</Link>
					</div>
				</div>
			</motion.div>
			<Pagination up='/Modulo1_1' down='/Modulo1_7' />
		</Layout>
	);
}
export default Modulo1_2;
