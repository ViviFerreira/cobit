import React from 'react';
import Layout from '../../../components/Layout';
import TitleModulo from '../../../components/TitleModulo';
import Pagination from '../../../components/Pagination';
import { motion } from 'framer-motion';
import './styles.css';

function Modulo2_2() {
	const fadeInFromTop = {
		initial: { y: -100, opacity: 0 },
		animate: { y: 0, opacity: 1 },
		exit: { y: 100, opacity: 0 },
	};
	return (
		<Layout>
			<motion.div className='container'
			>
				<TitleModulo>
					<span className='title-destaque'>PRINCÍPIOS</span> do COBIT 2019
				</TitleModulo>
				<h1 className='titlePrincipio'>
					Princípios de um <span>Framework de Governança</span>
				</h1>

				<div className='boxModulo2'>
					<div className='numero'>2</div>
					<div className='conteudo'>
						<p>
							No segundo princípio, o COBIT 2019 afirma que uma estrutura de governança
							deve ser aberta e flexível. Quando há uma maneira flexível de endereçar
							as questões, isso pode diminuir os riscos, como perda de tempo, falta de
							recursos, custos financeiros não previstos, custos intangíveis, etc.
						</p>
					</div>
				</div>
				<div class='progress-bar8'></div>
				<Pagination up='/Modulo2_9' down='/Modulo2_11' />
			</motion.div>
		</Layout>
	);
}
export default Modulo2_2;
