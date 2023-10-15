import React from 'react';
import Layout from '../../../components/Layout';
import TitleModulo from '../../../components/TitleModulo';
import Pagination from '../../../components/Pagination';
import imgModulo1_1 from '../../../assets/img/imgModulo4_1.png';
import { motion } from 'framer-motion';
import './styles.css';

function Modulo4_1() {
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
				variants={fadeInFromTop}
			>
				<TitleModulo>
					<span class='title-destaque'>GERENCIAMENTO DE DESEMPENHO</span> do COBIT
					2019
				</TitleModulo>

				<div className='contentModulo4_1'>
					<div className='imgModulo4_1'>
						<img src={imgModulo1_1}></img>
					</div>

					<div className='textModulo4_1'>
						<div>
							<p className='textOne'>
								O CPM (Cobit Process Model - Modelo de Processo COBIT) é uma
								representação gráfica fundamental da estrutura hierárquica do COBIT.{' '}
							</p>
						</div>
						<div>
							<p className='textTwo'>
								O propósito central do CPM é simplificar a compreensão de cada nível e
								promover a comunicação fluida entre as equipes de TI, a alta
								administração e outras partes envolvidas.
							</p>
						</div>
						<div>
							<p className='textThree'>
								Os níveis de capacidade compreendem seis estágios, começando do 0 e indo
								até o 5.
							</p>
						</div>
					</div>
				</div>
			</motion.div>
			<Pagination up='/Modulo4' down='/Modulo4_2' />
		</Layout>
	);
}
export default Modulo4_1;
