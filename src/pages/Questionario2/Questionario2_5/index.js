import React from 'react';
import Layout from '../../../components/Layout';
import Pagination from '../../../components/Pagination';
import TitleModulo from '../../../components/TitleModulo';

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
					4. Qual é a importância de alinhar o sistema de governança com os
					principais padrões e regulamentos relacionados?
				</h4>

				<div className='container-questões'>
					<div className='questão'>
						Isso não é importante, pois a governança de TI é independente de
						regulamentos externos.
					</div>
					<div className='questão correct'>
						Garantir a conformidade com leis e regulamentos é fundamental para as
						organizações.
					</div>

					<div className='questão'>
						Alinhar-se com regulamentos torna o sistema de governança menos eficiente.
					</div>
					<div className='questão'>
						Apenas as grandes empresas precisam se preocupar com a conformidade.
					</div>
				</div>
				<Pagination up='/Questionario2_4' down='/Modulo3' />
			</div>
		</Layout>
	);
}
export default Questionario1_1;
