import React from 'react';
import Questionario from '../../../components/Questionario';

function Questionario4_5() {
	return (
		<Questionario
			title='4. Em que nível um processo no COBIT alcança seus objetivos e avalia seu desempenho de maneira quantitativa, buscando constantemente melhorias?	'
			q1={{
				questao: 'Nível 0.',
				correta: 'False',
			}}
			q2={{
				questao: 'Nível 3.',
				correta: 'False',
			}}
			q3={{
				questao: ' Nível 4.',
				correta: 'False',
			}}
			q4={{
				questao: 'Nível 5.',
				correta: 'True',
			}}
			up='/Questionario4_4'
			down='/Modulo5'
		/>
	);
}
export default Questionario4_5;
