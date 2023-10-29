import React from 'react';
import Layout from '../../../components/Layout';
import Pagination from '../../../components/Pagination';
import { motion } from 'framer-motion';
import './styles.css';

import { Link } from 'react-router-dom';

function Modulo3_13() {
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
				<div className='contentModulo3_13'>
					<div className='cardApoBaiDssMeaModulo3_13'>
						<Link to='/Modulo3_8' className='meaBackgroundModulo3_13'>
							<div className='cardMeaModulo3_13'>
								<p className='textEdmModulo3_13'>MEA 1</p>
							</div>
							<div className='cardMeaModulo3_13'>
								<p className='textEdmModulo3_13'>MEA 2</p>
							</div>
							<div className='cardMeaModulo3_13'>
								<p className='textEdmModulo3_13'>MEA 3</p>
							</div>
							<div className='cardMeaModulo3_13'>
								<p className='textEdmModulo3_13'>MEA 4</p>
							</div>
						</Link>
					</div>
                    <div className='contentCardModulo3_13'>
                        <div className='aling-line-Modulo3_13'>
                            <div className='line-cardInfoMea1'></div>
                            <div className='cardInfoMea1'>
                                <p>Monitorção do desempenho e da conformidade gerenciaado</p>
                            </div>
                        </div>
                        <div className='aling-line-Modulo3_13'>
                            <div className='line-cardInfoMea1'></div>
                            <div className='cardInfoMea1'>
                                <p>Sistema de controle interno gerenciado</p>
                            </div>
                        </div>
                        <div className='aling-line-Modulo3_13'>
                            <div className='line-cardInfoMea1'></div>
                            <div className='cardInfoMea1'>
                                <p>Conformidade com regulções externas gerenciaadds</p>
                            </div>
                        </div>
                        <div className='aling-line-Modulo3_13'>
                            <div className='line-cardInfoMea1'></div>
                            <div className='cardInfoMea1'>
                                <p>Garantia gerenciada</p>
                            </div>
                        </div>
				    </div>
				</div>
			</motion.div>
			<Pagination up='/Modulo3_8' down='/Questionario3_1' />
		</Layout>
	);
}
export default Modulo3_13;
