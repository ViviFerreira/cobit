import React from 'react';
import Layout from '../../../components/Layout';
import Pagination from '../../../components/Pagination';
import TitleModulo from '../../../components/TitleModulo';
import './styles.css';

function Questionario1_1() {
	return (
		<Layout>
			<div className='container'>
				<div>
					<TitleModulo>
						<span class='title-destaque'>QUESTIONÁRIO</span>
					</TitleModulo>
				</div>
				<h4 className='title-questão'>
					1. Qual é o significado de "Valor" no contexto da governança de TI?
				</h4>

				<div className='container-questões'>
					<div className='questão'>
						Significa o preço das ações da empresa no mercado.
					</div>
					<div className='questão'>
						Refere-se apenas aos benefícios financeiros de um projeto de TI.
					</div>

					<div className='questão correct'>
						Representa um equilíbrio entre benefícios, riscos e recursos.
					</div>
					<div className='questão'>
						Refere-se ao número de funcionários de TI na empresa.
					</div>
				</div>
				<Pagination up='/Questionario2_1' down='/Questionario2_3' />
			</div>
		</Layout>
	);
}
export default Questionario1_1;
