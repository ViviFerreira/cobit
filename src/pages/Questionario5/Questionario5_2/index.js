import React from 'react';
import Questionario from '../../../components/Questionario';

function Questionario5_2() {
	return (
		<Questionario
			title='1. Qual é a principal vantagem do COBIT 2019 em termos de aceitação global e adoção por diferentes organizações?'
			q1={{
				questao:
					'O COBIT 2019 é um framework de governança que só é utilizado por empresas de tecnologia, excluindo outros setores de negócios.',
				correta: 'False',
			}}
			q2={{
				questao:
					'O COBIT 2019 é globalmente aceito e amplamente adotado por organizações de diversos tipos, tamanhos e segmentos de negócios, o que reflete sua aceitação e reconhecimento global como um framework de governança eficaz.',
				correta: 'True',
			}}
			q3={{
				questao:
					'O COBIT 2019 foi lançado apenas em um idioma específico e não está disponível para organizações que operam em diferentes idiomas, o que limita sua aceitação global.',
				correta: 'False',
			}}
			q4={{
				questao:
					'Apesar de ser chamado de "global", o COBIT 2019 é apenas adotado em países do hemisfério norte, deixando de fora organizações no hemisfério sul.',
				correta: 'False',
			}}
			up='/Questionario5_1'
			down='/Questionario5_3'
		/>
	);
}
export default Questionario5_2;
