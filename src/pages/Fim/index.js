import React from 'react';
import Layout from '../../components/Layout';
import imgFim from '../../assets/img/imgFim.png';
import TitleModulo from '../../components/TitleModulo';
import { motion } from 'framer-motion';
import './styles.css';

function Fim() {
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
					<span className='title-destaque'>Parabéns!!! você concluiu todos os módulos.</span> 
				</TitleModulo>
                <div className='contentFim'>
                    <img src={imgFim}></img>
                    <div className='backgroundFim'>
                        <p>Parabéns pela conclusão dos 5 módulos na aplicação web! Sua dedicação e esforço são admiráveis. Continue brilhando em sua jornada de aprendizado! Atenciosamente, desenvolvedores</p>
                    </div>
                </div>
			</motion.div>
		</Layout>
	);
}
export default Fim;
