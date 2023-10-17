import React from 'react';
import Layout from '../../../components/Layout';
import Pagination from '../../../components/Pagination';
import TitleModulo from '../../../components/TitleModulo';
import './styles.css';

function Questionario5_2() {
	return (
		<Layout>
			<div className='container'>
				<div>
					<TitleModulo>
						<span class='title-destaque'>QUESTIONÁRIO</span>
					</TitleModulo>
				</div>
				<h4 className='title-questão'>
					1. Qual é a principal vantagem do COBIT 2019 em termos de aceitação global e adoção por diferentes organizações?
				</h4>

				<div className='container-questões'>
					<div className='questão'>O COBIT 2019 é um framework de governança que só é utilizado por empresas de tecnologia, excluindo outros setores de negócios.</div>
					<div className='questão correct'>O COBIT 2019 é globalmente aceito e amplamente adotado por organizações de diversos tipos, tamanhos e segmentos de negócios, o que reflete sua aceitação e reconhecimento global como um framework de governança eficaz.</div>
					<div className='questão'> O COBIT 2019 foi lançado apenas em um idioma específico e não está disponível para organizações que operam em diferentes idiomas, o que limita sua aceitação global.</div>
					<div className='questão'>Apesar de ser chamado de "global", o COBIT 2019 é apenas adotado em países do hemisfério norte, deixando de fora organizações no hemisfério sul.</div>
				</div>
				<Pagination up='/Questionario5_1' down='/Questionario5_3' />
			</div>
		</Layout>
	);
}
export default Questionario5_2;
