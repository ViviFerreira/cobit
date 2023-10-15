import React from 'react';
import Layout from '../../../components/Layout';
import Pagination from '../../../components/Pagination';
import TitleModulo from '../../../components/TitleModulo';
import './styles.css';

function Questionario1_1() {
	return (
		<Layout>
			<div className='container'>
				<div>
					<TitleModulo>
						<span class='title-destaque'>QUESTIONÁRIO</span>
					</TitleModulo>
				</div>
				<h4 className='title-questão'>
					2. Por que é importante separar a governança do gerenciamento em um sistema
					de governança?
				</h4>

				<div className='container-questões'>
					<div className='questão'>
						Isso simplifica o processo de tomada de decisões.
					</div>
					<div className='questão'>
						A governança e o gerenciamento são a mesma coisa, então não é importante
						separá-los.
					</div>

					<div className='questão correct'>
						A governança define a direção estratégica, enquanto o gerenciamento
						implementa essa direção.
					</div>
					<div className='questão'>
						Separar a governança do gerenciamento cria confusão e atrasos nos projetos
						de TI.
					</div>
				</div>
				<Pagination up='/Questionario2_2' down='/Questionario2_4' />
			</div>
		</Layout>
	);
}
export default Questionario1_1;
