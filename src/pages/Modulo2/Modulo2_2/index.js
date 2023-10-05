import React from 'react';
import Layout from '../../../components/Layout';
import TitleModulo from '../../../components/TitleModulo';
import Pagination from '../../../components/Pagination';
import './styles.css';

function Modulo2_2() {
	return (
		<Layout>
			<div className='container'>
				<TitleModulo>PRINCÍPIOS do COBIT 2019</TitleModulo>
				<h1 className='titlePrincipio'>
					Princípios de um <span>Sistema de Governança</span>
				</h1>

				<div className='boxModulo2'>
					<div className='numero'>1</div>
					<div className='conteudo'>
						<p>
							Esse princípio afirma que cada empresa requer um sistema de governança
							para atender as necessidades das partes interessadas e gerar valor
							através do uso de Tecnologia e informação. Valor, no contexto da
							governança, significa um equilíbrio entre benefícios, riscos e recursos.
						</p>
					</div>
				</div>
				<div class='progress-bar1'></div>
				<Pagination up='/Modulo2_1' down='/Modulo2_3' />
			</div>
		</Layout>
	);
}
export default Modulo2_2;
