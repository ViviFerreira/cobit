import React from 'react';
import Layout from '../../../components/Layout';
import TitleModulo from '../../../components/TitleModulo';
import Pagination from '../../../components/Pagination';
import './styles.css';

function Modulo2_2() {
	return (
		<Layout>
			<div className='container'>
				<TitleModulo>PRINCÍPIOS do COBIT 2019</TitleModulo>
				<h1 className='titlePrincipio'>
					Princípios de um <span>Framework de Governança</span>
				</h1>

				<div className='boxModulo2'>
					<div className='numero'>3</div>
					<div className='conteudo'>
						<p>
							Garantir a conformidade tem ser uma prioridade para todas as
							organizações. Portanto, alinhar o sistema de governança às leis e
							regulamentos é absolutamente essencial. As melhores práticas e diretrizes
							amplamente aceitas vão ajudar a garantir que as empresas façam negócios
							de uma maneira comprovadamente eficaz, eficiente e segura.
						</p>
					</div>
				</div>
				<div class='progress-bar9'></div>
				<Pagination up='/Modulo2_10' down='/Modulo2_10' />
			</div>
		</Layout>
	);
}
export default Modulo2_2;
