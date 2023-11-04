import React from 'react';
import Questionario from '../../../components/Questionario';

function Questionario4_3() {
	return (
		<Questionario
			title='2. Qual é o propósito principal do CPM no COBIT?'
			q1={{
				questao:
					' Fornecer uma estrutura hierárquica para o gerenciamento de projetos.',
				correta: 'False',
			}}
			q2={{
				questao: 'Documentar todos os processos em vigor em uma organização.',
				correta: 'False',
			}}
			q3={{
				questao:
					'Oferecer uma visão visual dos processos, atividades e interações no COBIT.',
				correta: 'True',
			}}
			q4={{
				questao:
					'd) Criar uma lista de atividades executadas em um departamento de TI.',
				correta: 'False',
			}}
			up='/Questionario4_2'
			down='/Questionario4_5'
		/>
	);
}
export default Questionario4_3;
