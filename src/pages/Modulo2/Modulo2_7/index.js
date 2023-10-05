import React from 'react';
import Layout from '../../../components/Layout';
import TitleModulo from '../../../components/TitleModulo';
import Pagination from '../../../components/Pagination';
import './styles.css';

function Modulo2_7() {
	return (
		<Layout>
			<div className='container'>
				<TitleModulo>PRINCÍPIOS do COBIT 2019</TitleModulo>
				<h1 className='titlePrincipio'>
					Princípios de um <span>Sistema de Governança</span>
				</h1>

				<div className='boxModulo2'>
					<div className='numero'>6</div>
					<div className='conteudo'>
						<p>
							O sistema de governança não pode ser concentrado só no departamento de
							TI. Ele precisa incluir toda a tecnologia e informações localizadas
							dentro da empresa e utilizadas nos negócios para atingir as metas e
							objetivos de negócios.
						</p>
					</div>
				</div>
				<div class='progress-bar6'></div>
				<Pagination up='/Modulo2_6' down='/Modulo2_6' />
			</div>
		</Layout>
	);
}
export default Modulo2_7;
