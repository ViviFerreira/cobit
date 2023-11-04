import React from 'react';
import Questionario from '../../../components/Questionario';

function Questionario5_3() {
	return (
		<Questionario
			title='2. Como o COBIT 2019 contribui para a visibilidade e investimentos adequados em ativos de TI?'
			q1={{
				questao:
					'O COBIT 2019, na verdade, reduz a visibilidade dos ativos de TI, tornando mais difícil para as organizações identificar a importância estratégica dos ativos e, portanto, dificultando a obtenção de investimentos necessários.',
				correta: 'False',
			}}
			q2={{
				questao:
					'O COBIT 2019 não tem impacto na visibilidade dos ativos de TI; sua principal função é apenas criar documentação interna para os departamentos de TI das organizações.',
				correta: 'False',
			}}
			q3={{
				questao:
					'O COBIT 2019 ajuda a dar visibilidade para os ativos de TI, aumentando a probabilidade de obtenção dos investimentos necessários, pois demonstra a importância desses ativos ao agregar valor aos negócios, destacando sua relevância estratégica.',
				correta: 'True',
			}}
			q4={{
				questao:
					'Embora o COBIT 2019 destaque a relevância estratégica dos ativos de TI, ele não tem relação com a obtenção de investimentos; isso depende apenas da vontade dos investidores e não está relacionado ao framework de governança.',
				correta: 'False',
			}}
			up='/Questionario5_1'
			down='/Questionario5_3'
		/>
	);
}
export default Questionario5_3;
