import React from 'react';
import Layout from '../../../components/Layout';
import TitleModulo from '../../../components/TitleModulo';
import Pagination from '../../../components/Pagination';
import './styles.css';

function Modulo2_5() {
	return (
		<Layout>
			<div className='container'>
				<TitleModulo>PRINCÍPIOS do COBIT 2019</TitleModulo>
				<h1 className='titlePrincipio'>
					Princípios de um <span>Sistema de Governança</span>
				</h1>

				<div className='boxModulo2'>
					<div className='numero'>4</div>
					<div className='conteudo'>
						<p>
							A governança define a direção estratégica de uma empresa e, em seguida, o
							gerenciamento planeja, constrói e executa essa visão. Portanto, é
							importante distinguir entre os dois e fazer com que as atividades e
							estruturas sejam diferenciadas em seu sistema de governança.
						</p>
					</div>
				</div>
				<div class='progress-bar4'></div>
				<Pagination up='/Modulo2_4' down='/Modulo2_6' />
			</div>
		</Layout>
	);
}
export default Modulo2_5;
