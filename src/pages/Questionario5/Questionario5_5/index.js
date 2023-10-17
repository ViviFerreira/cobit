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
					4. Qual é a função do COBIT 2019 na otimização de riscos e recursos relacionados à TI?
				</h4>

				<div className='container-questões'>
					<div className='questão'>O COBIT 2019 só lida com riscos relacionados a hardware, ignorando completamente os riscos de software e segurança cibernética, o que resulta em uma gestão inadequada dos recursos de TI.</div>
					<div className='questão'>O COBIT 2019 aumenta os riscos associados à TI, tornando a gestão de recursos mais complexa e impactando negativamente os negócios.</div>
					<div className='questão'>O COBIT 2019 não tem impacto na otimização de riscos e recursos; sua principal função é apenas fornecer diretrizes para a gestão básica de TI, sem considerar riscos ou eficiência de recursos.</div>
					<div className='questão correct'> O COBIT 2019 auxilia na otimização de riscos e recursos ao abordar os riscos de negócios associados à TI, garantindo uma gestão eficiente dos recursos e riscos, o que, por sua vez, afeta positivamente os negócios como um todo.</div>
				</div>
				<Pagination up='/Questionario5_3' down='/Questionario5_5' />
			</div>
		</Layout>
	);
}
export default Questionario5_5;
