import React from 'react';
import Questionario from '../../../components/Questionario';

function Questionario1_4() {
	return (
		<Questionario
			title='4. Por que a fase de "Decisão" no Ciclo de Governança de TI é fundamental para o sucesso da governança de TI?'
			q1={{
				questao:
					'A fase de "Decisão" envolve a tomada de decisões informadas sobre investimentos em tecnologia e recursos, o que influencia diretamente a eficácia da governança de TI.',
				correta: 'True',
			}}
			q2={{
				questao:
					' A fase de "Decisão" é a menos importante do Ciclo de Governança de TI.',
				correta: 'False',
			}}
			q3={{
				questao:
					'A fase de "Decisão" envolve apenas escolhas aleatórias sem base em dados.',
				correta: 'False',
			}}
			q4={{
				questao: 'A fase de "Decisão" não está relacionada à governança de TI.',
				correta: 'False',
			}}
			up='/Questionario1_4'
			down='/Modulo2'
		/>
	);
}
export default Questionario1_4;
