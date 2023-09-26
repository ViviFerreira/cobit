import React from 'react';
import Layout from '../../components/Layout';
import ButtonStart from '../../components/ButtonStart';
import imgIntro from '../../assets/img/imgIntro.png';
import './styles.css';

function Home() {
	return (
		<Layout>
			<div className='container'>
				<div className='circulo'></div>
				<div className='intro'>
					<div>
						<h1 className='title'>Aprenda sobre</h1>
						<h2 className='subTitle'>
							C<span className='logo-cobit-home'>O</span>BIT
							<span className='ano'>2019</span>
						</h2>
					</div>
					<p className='description'>
						Nossa plataforma oferece uma apresentação dinâmica dos conceitos e
						fundamentos do COBIT 2019
					</p>
				</div>
				<div className='img-container'>
					<div className='imgIntro'>
						<img src={imgIntro} alt='Opss' />
						<ButtonStart />
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default Home;
