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
					4. Por que a fase de "Decisão" no Ciclo de Governança de TI é fundamental
					para o sucesso da governança de TI?
				</h4>

				<div className='container-questões'>
					<div className='questão correct'>
						A fase de "Decisão" envolve a tomada de decisões informadas sobre
						investimentos em tecnologia e recursos, o que influencia diretamente a
						eficácia da governança de TI.
					</div>
					<div className='questão'>
						A fase de "Decisão" é a menos importante do Ciclo de Governança de TI.
					</div>

					<div className='questão'>
						A fase de "Decisão" envolve apenas escolhas aleatórias sem base em dados.
					</div>
					<div className='questão'>
						A fase de "Decisão" não está relacionada à governança de TI.
					</div>
				</div>
				<Pagination up='/Questionario1_4' down='/Modulo2' />
			</div>
		</Layout>
	);
}
export default Questionario1_1;
