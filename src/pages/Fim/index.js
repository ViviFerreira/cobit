import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import imgFim from '../../assets/img/imgFim.png';
import imgFim2 from '../../assets/img/imgFim2.png';
import { useAplication } from '../../providers/points';
import TitleModulo from '../../components/TitleModulo';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './styles.css';

function Fim() {
	const { completeQuestions } = useAplication();

	const fadeInFromTop = {
		initial: { y: -100, opacity: 0 },
		animate: { y: 0, opacity: 1 },
		exit: { y: 100, opacity: 0 },
	};

	let qntModulos = 0;
	let fim = false;

	for (let i = 0; i < completeQuestions.length; i++) {
		if (completeQuestions[i] == true) {
			qntModulos += 1;
		}
	}

	if (qntModulos == 5) {
		fim = true;
	}

	return (
		<Layout>
			<motion.div
				className='container'
				initial='initial'
				animate='animate'
				exit='exit'
				variants={fadeInFromTop}
			>
				{fim == true && (
					<>
						<TitleModulo>
							<span className='title-destaque'>
								Parabéns!!! você concluiu todos os módulos.
							</span>
						</TitleModulo>
						<div className='contentFim'>
							<img src={imgFim}></img>
							<div className='backgroundFim'>
								<p>
									Parabéns pela conclusão dos 5 módulos na aplicação web! Sua dedicação e
									esforço são admiráveis. Continue brilhando em sua jornada de
									aprendizado! Atenciosamente, desenvolvedores
								</p>
							</div>
						</div>
					</>
				)}

				{fim == false && (
					<>
						<TitleModulo>
							<span className='title-destaque'>
								Atenção!!! Você não concluiu todos os módulos
							</span>
						</TitleModulo>
						<div className='contentFim'>
							<img src={imgFim2}></img>
							<div className='backgroundFim'>
								<p>
									Ainda faltam módulos... <br />
									Verifique no <Link to='/Mapa'> Mapa</Link> quais módulos você ainda
									precisa concluir
								</p>
							</div>
						</div>
					</>
				)}
			</motion.div>
		</Layout>
	);
}
export default Fim;
