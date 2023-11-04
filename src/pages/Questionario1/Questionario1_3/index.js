import React from 'react';
import Questionario from '../../../components/Questionario';

function Questionario1_3() {
	return (
		<Questionario
			title='2. Qual é o papel do framework COBIT em uma organização e como ele auxilia na governança de TI?'
			q1={{
				questao:
					'O COBIT é um framework voltado exclusivamente para segurança cibernética.',
				correta: 'False',
			}}
			q2={{
				questao: 'O COBIT não tem relação com a governança de TI.',
				correta: 'False',
			}}
			q3={{
				questao:
					'O COBIT fornece uma estrutura para ajudar as organizações a alcançar eficácia, eficiência, segurança e conformidade na gestão de TI.',
				correta: 'True',
			}}
			q4={{
				questao: 'O COBIT se concentra apenas na gestão de recursos humanos',
				correta: 'False',
			}}
			up='/Questionario1_2'
			down='/Questionario1_4'
		/>
	);
}
export default Questionario1_3;
