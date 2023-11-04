import React from 'react';
import Questionario from '../../../components/Questionario';

function Questionario4_4() {
	return (
		<Questionario
			title='3.Quantos níveis de capacidade de processos são definidos no COBIT ?'
			q1={{
				questao: '3 níveis.',
				correta: 'False',
			}}
			q2={{
				questao: '4 níveis.',
				correta: 'False',
			}}
			q3={{
				questao: ' 5 níveis.',
				correta: 'False',
			}}
			q4={{
				questao: '6 níveis.',
				correta: 'True',
			}}
			up='/Questionario4_3'
			down='/Questionario4_6'
		/>
	);
}
export default Questionario4_4;
