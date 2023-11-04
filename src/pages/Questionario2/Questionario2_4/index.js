import React from 'react';
import Questionario from '../../../components/Questionario';

function Questionario2_4() {
	return (
		<Questionario
			title='3. Por que o COBIT 2019 enfatiza que um framework de governança deve ser flexível e aberto?'
			q1={{
				questao:
					'Para aumentar a complexidade e rigidez do processo de governança.',
				correta: 'False',
			}}
			q2={{
				questao:
					'Para diminuir os riscos, como perda de tempo e custos não previstos.',
				correta: 'True',
			}}
			q3={{
				questao: 'Para impor regras estritas nas organizações.',
				correta: 'False',
			}}
			q4={{
				questao: 'Para tornar a governança menos acessível.',
				correta: 'False',
			}}
			up='/Questionario2_3'
			down='/Questionario2_5'
		/>
	);
}
export default Questionario2_4;
