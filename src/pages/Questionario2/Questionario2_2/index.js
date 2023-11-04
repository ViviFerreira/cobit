import React from 'react';
import Questionario from '../../../components/Questionario';

function Questionario2_2() {
	return (
		<Questionario
			title='1. Qual é o significado de "Valor" no contexto da governança de TI?'
			q1={{
				questao: 'Significa o preço das ações da empresa no mercado.',
				correta: 'False',
			}}
			q2={{
				questao: 'Refere-se apenas aos benefícios financeiros de um projeto de TI.',
				correta: 'False',
			}}
			q3={{
				questao: 'Representa um equilíbrio entre benefícios, riscos e recursos.',
				correta: 'True',
			}}
			q4={{
				questao: 'Refere-se ao número de funcionários de TI na empresa.',
				correta: 'False',
			}}
			up='/Questionario2_1'
			down='/Questionario2_3'
		/>
	);
}
export default Questionario2_2;
