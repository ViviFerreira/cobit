import React from 'react';
import Questionario from '../../../components/Questionario';

function Questionario1_2() {
	return (
		<Questionario
			title='1. Qual é a importância do alinhamento estratégico na governança de TI e como ele se relaciona com o Ciclo de Governança de TI?'
			q1={{
				questao:
					'O alinhamento estratégico é menos importante na governança de TI e não está diretamente relacionado ao Ciclo de Governança de TI.',
				correta: 'False',
			}}
			q2={{
				questao:
					'O alinhamento estratégico é crucial para garantir que a TI esteja em sintonia com os objetivos da organização, e está relacionado à fase de "Alinhamento estratégico e compliance" no Ciclo de Governança de TI.',
				correta: 'True',
			}}
			q3={{
				questao:
					'O alinhamento estratégico é importante apenas para empresas de pequeno porte.',
				correta: 'False',
			}}
			q4={{
				questao:
					'O alinhamento estratégico é uma responsabilidade exclusiva do departamento de TI.',
				correta: 'False',
			}}
			up='/Questionario1_1'
			down='/Questionario1_3'
		/>
	);
}
export default Questionario1_2;
