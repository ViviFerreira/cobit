import React from 'react';
import Questionario from '../../../components/Questionario';

function Questionario1_4() {
	return (
		<Questionario
			title='3. O que são os domínios centrais do COBIT e como eles se relacionam com a governança de TI?'
			q1={{
				questao:
					'Os domínios centrais do COBIT são áreas geográficas de atuação das organizações.',
				correta: 'False',
			}}
			q2={{
				questao:
					' Os domínios centrais do COBIT não têm relação com a governança de TI.',
				correta: 'False',
			}}
			q3={{
				questao:
					'Os domínios centrais do COBIT se referem aos diferentes departamentos de uma organização.',
				correta: 'False',
			}}
			q4={{
				questao:
					'Os domínios centrais do COBIT representam áreas-chave de foco, como Gerenciamento de Serviços de TI, que são cruciais para a governança de TI.',
				correta: 'True',
			}}
			up='/Questionario1_3'
			down='/Questionario1_5'
		/>
	);
}
export default Questionario1_4;
