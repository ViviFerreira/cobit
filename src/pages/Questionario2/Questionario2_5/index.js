import React from 'react';
import Questionario from '../../../components/Questionario';

function Questionario2_5() {
	return (
		<Questionario
			title='4. Qual é a importância de alinhar o sistema de governança com os principais padrões e regulamentos relacionados?'
			q1={{
				questao:
					' Isso não é importante, pois a governança de TI é independente de regulamentos externos.',
				correta: 'False',
			}}
			q2={{
				questao:
					'Garantir a conformidade com leis e regulamentos é fundamental para as organizações.',
				correta: 'True',
			}}
			q3={{
				questao:
					'Alinhar-se com regulamentos torna o sistema de governança menos eficiente.',
				correta: 'False',
			}}
			q4={{
				questao:
					' Apenas as grandes empresas precisam se preocupar com a conformidade.',
				correta: 'False',
			}}
			up='/Questionario2_4'
			down='/Modulo3'
		/>
	);
}
export default Questionario2_5;
