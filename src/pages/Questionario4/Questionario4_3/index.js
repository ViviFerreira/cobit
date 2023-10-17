import React from 'react';
import Layout from '../../../components/Layout';
import Pagination from '../../../components/Pagination';
import TitleModulo from '../../../components/TitleModulo';

function Questionario4_3() {
	return (
		<Layout>
			<div className='container'>
				<div>
					<TitleModulo>
						<span class='title-destaque'>QUESTIONÁRIO</span>
					</TitleModulo>
				</div>
				<h4 className='title-questão'>
					2. Qual é o propósito principal do CPM no COBIT?
				</h4>

				<div className='container-questões'>
					<div className='questão'>
						Fornecer uma estrutura hierárquica para o gerenciamento de projetos.
					</div>
					<div className='questão'>
						Documentar todos os processos em vigor em uma organização.
					</div>

					<div className='questão correct'>
						Oferecer uma visão visual dos processos, atividades e interações no COBIT.
					</div>
					<div className='questão'>
						Criar uma lista de atividades executadas em um departamento de TI.
					</div>
				</div>
				<Pagination up='/Questionario4_2' down='/Questionario4_4' />
			</div>
		</Layout>
	);
}
export default Questionario4_3;
