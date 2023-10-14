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
					3. Por que o COBIT 2019 enfatiza que um framework de governança deve ser
					flexível e aberto?
				</h4>

				<div className='container-questões'>
					<div className='questão'>
						Para aumentar a complexidade e rigidez do processo de governança.
					</div>
					<div className='questão correct '>
						Para diminuir os riscos, como perda de tempo e custos não previstos.
					</div>

					<div className='questão'>Para impor regras estritas nas organizações.</div>
					<div className='questão'>Para tornar a governança menos acessível.</div>
				</div>
				<Pagination up='/Questionario2_3' down='/Questionario2_5' />
			</div>
		</Layout>
	);
}
export default Questionario1_1;
