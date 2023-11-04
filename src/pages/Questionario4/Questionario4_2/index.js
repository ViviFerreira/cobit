import React from 'react';
import Questionario from '../../../components/Questionario';

function Questionario4_2() {
	return (
		<Questionario
			title='1. O que significa a sigla "CPM" no COBIT?'
			q1={{
				questao: ' Centralized Process Management.',
				correta: 'False',
			}}
			q2={{
				questao: 'Cobit Process Model.',
				correta: 'True',
			}}
			q3={{
				questao: 'Certified Project Manager.',
				correta: 'False',
			}}
			q4={{
				questao: ' Corporate Process Mapping.',
				correta: 'False',
			}}
			up='/Questionario4_1'
			down='/Questionario4_3'
		/>
	);
}
export default Questionario4_2;
