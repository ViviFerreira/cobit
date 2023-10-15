import React from 'react';
import Layout from '../../../components/Layout';
import Pagination from '../../../components/Pagination';
import TitleModulo from '../../../components/TitleModulo';

function Questionario4_4() {
	return (
		<Layout>
			<div className='container'>
				<div>
					<TitleModulo>
						<span class='title-destaque'>QUESTIONÁRIO</span>
					</TitleModulo>
				</div>
				<h4 className='title-questão'>
					3. Quantos níveis de capacidade de processos são definidos no COBIT ?
				</h4>

				<div className='container-questões'>
					<div className='questão'>3 níveis.</div>
					<div className='questão'>4 níveis.</div>
					<div className='questão correct'>5 níveis.</div>
					<div className='questão'>6 níveis.</div>
				</div>
				<Pagination up='/Questionario4_3' down='/Questionario4_5' />
			</div>
		</Layout>
	);
}
export default Questionario4_4;
