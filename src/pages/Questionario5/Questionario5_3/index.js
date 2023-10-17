import React from 'react';
import Layout from '../../../components/Layout';
import Pagination from '../../../components/Pagination';
import TitleModulo from '../../../components/TitleModulo';

function Questionario5_3() {
	return (
		<Layout>
			<div className='container'>
				<div>
					<TitleModulo>
						<span class='title-destaque'>QUESTIONÁRIO</span>
					</TitleModulo>
				</div>
				<h4 className='title-questão'>
					2. Como o COBIT 2019 contribui para a visibilidade e investimentos adequados em ativos de TI?
				</h4>

				<div className='container-questões'>
					<div className='questão'>
                    O COBIT 2019, na verdade, reduz a visibilidade dos ativos de TI, tornando mais difícil para as organizações identificar a importância estratégica dos ativos e, portanto, dificultando a obtenção de investimentos necessários.
					</div>
					<div className='questão'>
                    O COBIT 2019 não tem impacto na visibilidade dos ativos de TI; sua principal função é apenas criar documentação interna para os departamentos de TI das organizações.
					</div>

					<div className='questão correct'>
                        O COBIT 2019 ajuda a dar visibilidade para os ativos de TI, aumentando a probabilidade de obtenção dos investimentos necessários, pois demonstra a importância desses ativos ao agregar valor aos negócios, destacando sua relevância estratégica.
					</div>
					<div className='questão'>
                    Embora o COBIT 2019 destaque a relevância estratégica dos ativos de TI, ele não tem relação com a obtenção de investimentos; isso depende apenas da vontade dos investidores e não está relacionado ao framework de governança.
					</div>
				</div>
				<Pagination up='/Questionario5_2' down='/Questionario5_4' />
			</div>
		</Layout>
	);
}
export default Questionario5_3;
