import React from 'react';
import Layout from '../../../components/Layout';
import TitleModulo from '../../../components/TitleModulo';
import Pagination from '../../../components/Pagination';
import './styles.css';

function Modulo1_3() {
	return (
		<Layout>
			<div className='container'>
				<TitleModulo>PRINCÍPIOS do COBIT 2019</TitleModulo>
				<h1 className='titlePrincipio'>
					Princípios de um <span>Sistema de Governança</span>
				</h1>

				<div className='boxModulo2'>
					<div className='numero'>2</div>
					<div className='conteudo'>
						<p>
							Afirma que um sistema de governança deve ser construído a partir de
							componentes que podem ser de tipos diferentes e que devem funcionar em
							conjunto.Afirma que um sistema de governança deve ser construído a partir
							de componentes que podem ser de tipos diferentes e que devem funcionar em
							conjunto.
						</p>
					</div>
				</div>
				<div class='progress-bar2'></div>
				<Pagination up='/Modulo2_2' down='/Modulo2_4' />
			</div>
		</Layout>
	);
}
export default Modulo1_3;
