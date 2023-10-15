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
					3. O que são os domínios centrais do COBIT e como eles se relacionam com a
					governança de TI?
				</h4>

				<div className='container-questões'>
					<div className='questão'>
						Os domínios centrais do COBIT são áreas geográficas de atuação das
						organizações.
					</div>
					<div className='questão'>
						Os domínios centrais do COBIT não têm relação com a governança de TI.
					</div>

					<div className='questão'>
						Os domínios centrais do COBIT se referem aos diferentes departamentos de
						uma organização.
					</div>
					<div className='questão correct'>
						Os domínios centrais do COBIT representam áreas-chave de foco, como
						Gerenciamento de Serviços de TI, que são cruciais para a governança de TI.
					</div>
				</div>
				<Pagination up='/Questionario1_3' down='/Questionario1_5' />
			</div>
		</Layout>
	);
}
export default Questionario1_1;
