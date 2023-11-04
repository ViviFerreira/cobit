import React from 'react';
import Questionario from '../../../components/Questionario';

function Questionario5_4() {
	return (
		<Questionario
			title='2. Como o COBIT 2019 contribui para a visibilidade e investimentos adequados em ativos de TI?'
			q1={{
				questao:
					'O COBIT 2019 é estritamente limitado ao departamento de TI e não pode ser aplicado em nenhum outro setor ou departamento da organização.',
				correta: 'False',
			}}
			q2={{
				questao:
					'O COBIT 2019 é versátil e pode ser aplicado em vários setores, não se limitando ao departamento de TI. Sua flexibilidade permite a integração com padrões, diretrizes e leis, adaptando-se às necessidades específicas de diferentes segmentos de negócios.',
				correta: 'True',
			}}
			q3={{
				questao:
					'O COBIT 2019 é apenas aplicável a indústrias relacionadas à produção de software e não tem relevância em setores como saúde, educação ou finanças.',
				correta: 'False',
			}}
			q4={{
				questao:
					' Embora o COBIT 2019 seja flexível, ele só pode ser aplicado em pequenas empresas e não é adequado para organizações de grande porte ou multinacionais.',
				correta: 'False',
			}}
			up='/Questionario5_2'
			down='/Questionario5_4'
		/>
	);
}
export default Questionario5_4;
