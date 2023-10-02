import React from 'react';
import Layout from '../../../components/Layout';
import TitleModulo from '../../../components/TitleModulo';
import Pagination from '../../../components/Pagination';
import { Link } from 'react-router-dom';

import './styles.css';

function Modulo1_6() {
	return (
		<Layout>
			<div className='container'>
				<TitleModulo>Sobre o CICLO DE GOVERNANÇA DE TI</TitleModulo>
				<div className='contentCardTextModulo1_6'>
					<Link to='/Modulo1_2' className='cardModulo1_6'>
						<div>
							<ul>
								<li>1. Medição do valor e do desempenho</li>
							</ul>
						</div>
					</Link>
					<div className='textModulo1_6'>
						<p className='primaryTextModule1_6'>
							{' '}
							Métricas e indicadores são utilizados para monitorar o progresso em
							direção aos objetivos estratégicos,{' '}
							<span>permitindo ajustes e melhorias contínuas.</span>
						</p>
					</div>
				</div>
				<div>
					<Pagination up='/Modulo1_1' down='/Modulo1_7' />
				</div>
			</div>
		</Layout>
	);
}
export default Modulo1_6;
