import React from 'react';
import Layout from '../../../components/Layout';
import TitleModulo from '../../../components/TitleModulo';
import Pagination from '../../../components/Pagination';
import './styles.css';

function Modulo2_4() {
	return (
		<Layout>
			<div className='container'>
				<TitleModulo>
					<span className='title-destaque'>PRINCÍPIOS</span> do COBIT 2019
				</TitleModulo>
				<h1 className='titlePrincipio'>
					Princípios de um <span>Sistema de Governança</span>
				</h1>

				<div className='boxModulo2'>
					<div className='numero'>3</div>
					<div className='conteudo'>
						<p>
							A criação de um sistema de governança dinâmico refletirá o estado real
							das coisas e, então, essa visão dinâmica criará um sistema que é viável e
							reduz o risco, diminuindo problemas futuros se houver uma visão dinâmica
							de toda a empresa e seus sistemas de TI .
						</p>
					</div>
				</div>
				<div class='progress-bar3'></div>
				<Pagination up='/Modulo2_3' down='/Modulo2_5' />
			</div>
		</Layout>
	);
}
export default Modulo2_4;
