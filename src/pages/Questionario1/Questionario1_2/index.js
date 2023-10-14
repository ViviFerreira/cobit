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
					1. Qual é a importância do alinhamento estratégico na governança de TI e
					como ele se relaciona com o Ciclo de Governança de TI?
				</h4>

				<div className='container-questões'>
					<div className='questão'>
						O alinhamento estratégico é menos importante na governança de TI e não
						está diretamente relacionado ao Ciclo de Governança de TI
					</div>
					<div className='questão correct'>
						O alinhamento estratégico é crucial para garantir que a TI esteja em
						sintonia com os objetivos da organização.
					</div>

					<div className='questão'>
						O alinhamento estratégico é importante apenas para empresas de pequeno
						porte.
					</div>
					<div className='questão'>
						O alinhamento estratégico é uma responsabilidade exclusiva do departamento
						de TI.
					</div>
				</div>
				<Pagination up='/Questionario1_1' down='/Questionario1_3' />
			</div>
		</Layout>
	);
}
export default Questionario1_1;
