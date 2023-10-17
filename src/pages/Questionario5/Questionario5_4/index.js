import React from 'react';
import Layout from '../../../components/Layout';
import Pagination from '../../../components/Pagination';
import TitleModulo from '../../../components/TitleModulo';


function Questionario5_4() {
	return (
		<Layout>
			<div className='container'>
				<div>
					<TitleModulo>
						<span class='title-destaque'>QUESTIONÁRIO</span>
					</TitleModulo>
				</div>
				<h4 className='title-questão'>
					3. Além do departamento de TI, em que outros setores o COBIT 2019 é flexível e aplicável?
				</h4>

				<div className='container-questões'>
					<div className='questão'>O COBIT 2019 é estritamente limitado ao departamento de TI e não pode ser aplicado em nenhum outro setor ou departamento da organização.</div>
					<div className='questão correct'>O COBIT 2019 é versátil e pode ser aplicado em vários setores, não se limitando ao departamento de TI. Sua flexibilidade permite a integração com padrões, diretrizes e leis, adaptando-se às necessidades específicas de diferentes segmentos de negócios.</div>
					<div className='questão'> O COBIT 2019 é apenas aplicável a indústrias relacionadas à produção de software e não tem relevância em setores como saúde, educação ou finanças.</div>
					<div className='questão'>Embora o COBIT 2019 seja flexível, ele só pode ser aplicado em pequenas empresas e não é adequado para organizações de grande porte ou multinacionais.</div>
				</div>
				<Pagination up='/Questionario5_3' down='/Questionario5_5' />
			</div>
		</Layout>
	);
}
export default Questionario5_4;
