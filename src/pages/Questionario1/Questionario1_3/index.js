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
					2. Qual é o papel do framework COBIT em uma organização e como ele auxilia
					na governança de TI?
				</h4>

				<div className='container-questões'>
					<div className='questão'>
						O COBIT é um framework voltado exclusivamente para segurança cibernética.
					</div>
					<div className='questão'>
						O COBIT não tem relação com a governança de TI.
					</div>

					<div className='questão correct'>
						O COBIT fornece uma estrutura para ajudar as organizações a alcançar
						eficácia, eficiência, segurança e conformidade na gestão de TI.
					</div>
					<div className='questão'>
						O COBIT se concentra apenas na gestão de recursos humanos
					</div>
				</div>
				<Pagination up='/Questionario1_2' down='/Questionario1_4' />
			</div>
		</Layout>
	);
}
export default Questionario1_1;
