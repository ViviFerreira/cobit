import React from 'react';
import Layout from '../../components/Layout';
import ButtonStart from '../../components/ButtonStart';
import imgIntro from '../../assets/img/imgIntro2.png';
import './styles.css';

import { motion } from 'framer-motion';

function Home() {
	return (
		<Layout>
			<motion.div
				className='container-home'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
			>
				<div className='circuloHome'></div>
				<div className='intro'>
					<h1 className='title'>Aprenda sobre</h1>
					<h2 className='subTitle'>
						<p>
							C<span className='logo-cobit-home'>O</span>BIT
						</p>
						<span className='ano'>2019</span>
					</h2>

					<p className='description'>
						Nossa plataforma oferece uma apresentação dinâmica dos conceitos e
						fundamentos do COBIT 2019
					</p>
				</div>
				<div className='img-container'>
					<img src={imgIntro} alt='Imagem sobre governança de TI' />
					<ButtonStart />
				</div>
			</motion.div>
		</Layout>
	);
}

export default Home;
