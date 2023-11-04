import React from 'react';
import Questionario from '../../../components/Questionario';

function Questionario2_3() {
	return (
		<Questionario
			title='2. Por que é importante separar a governança do gerenciamento em um sistema de governança?'
			q1={{
				questao: 'Isso simplifica o processo de tomada de decisões.',
				correta: 'False',
			}}
			q2={{
				questao:
					'A governança e o gerenciamento são a mesma coisa, então não é importante separá-los.',
				correta: 'False',
			}}
			q3={{
				questao:
					'A governança define a direção estratégica, enquanto o gerenciamento implementa essa direção.',
				correta: 'True',
			}}
			q4={{
				questao:
					'Separar a governança do gerenciamento cria confusão e atrasos nos projetos de TI.',
				correta: 'False',
			}}
			up='/Questionario2_2'
			down='/Questionario2_4'
		/>
	);
}
export default Questionario2_3;
