import React from 'react';
import Layout from '../../../components/Layout';
import TitleModulo from '../../../components/TitleModulo';
import Pagination from '../../../components/Pagination';
import './styles.css';

function Modulo2_6() {
	return (
		<Layout>
			<div className='container'>
				<TitleModulo>PRINCÍPIOS do COBIT 2019</TitleModulo>
				<h1 className='titlePrincipio'>
					Princípios de um <span>Sistema de Governança</span>
				</h1>

				<div className='boxModulo2'>
					<div className='numero'>5</div>
					<div className='conteudo'>
						<p>
							Negócios, até mesmo dentro do mesmo setor, vão ter necessidades,
							objetivos e metas diferentes. Não existem duas empresas iguais. Por isso,
							o sistema de governança precisa ser customizado para as necessidades
							específicas de cada negócio.
						</p>
					</div>
				</div>
				<div class='progress-bar5'></div>
				<Pagination up='/Modulo2_5' down='/Modulo2_7' />
			</div>
		</Layout>
	);
}
export default Modulo2_6;
