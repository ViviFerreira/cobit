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
					Princípios de um <span>Framework de Governança</span>
				</h1>

				<div className='boxModulo2'>
					<div className='numero'>1</div>
					<div className='conteudo'>
						<p>
							O COBIT 2019 reconhece que um framework de governança deve ser baseado em
							um modelo conceitual. Este modelo deve identificar os principais
							componentes e relacionamentos entre os componentes.
						</p>
					</div>
				</div>
				<div class='progress-bar7'></div>
				<Pagination up='/Modulo2_8' down='/Modulo2_10' />
			</div>
		</Layout>
	);
}
export default Modulo2_2;
