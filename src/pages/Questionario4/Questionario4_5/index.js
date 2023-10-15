import React from 'react';
import Layout from '../../../components/Layout';
import Pagination from '../../../components/Pagination';
import TitleModulo from '../../../components/TitleModulo';

function Questionario5_5() {
	return (
		<Layout>
			<div className='container'>
				<div>
					<TitleModulo>
						<span class='title-destaque'>QUESTIONÁRIO</span>
					</TitleModulo>
				</div>
				<h4 className='title-questão'>
					4. Em que nível um processo no COBIT alcança seus objetivos e avalia seu
					desempenho de maneira quantitativa, buscando constantemente melhorias?
				</h4>

				<div className='container-questões'>
					<div className='questão'>Nível 0.</div>
					<div className='questão'>Nível 3.</div>

					<div className='questão'>Nível 4.</div>
					<div className='questão correct'>Nível 5.</div>
				</div>
				<Pagination up='/Questionario4_4' down='/Modulo5' />
			</div>
		</Layout>
	);
}
export default Questionario5_5;
