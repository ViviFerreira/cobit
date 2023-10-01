import React from 'react';
import Layout from '../../../components/Layout';
import TitleModulo from '../../../components/TitleModulo';
import Pagination from '../../../components/Pagination';
import imgModulo1_1 from '../../../assets/img/imgModulo1_1.png';
import './styles.css';

function Modulo1_1() {
	return (
		<Layout>
			<div className='container'>
				<TitleModulo>PRINCÍPIOS do COBIT 2019</TitleModulo>
				<div className='contentModulo2_1'>
					<div className='descriptionModulo2_1'>
						Existem dois conjuntos de princípios dentro do COBIT 2019. Um conjunto de
						6 princípios para um{' '}
						<span className='highlightText'>sistema de governança,</span>e outro
						conjunto de 3 princípios para um framework de governança.
					</div>

					<div className='boxPrincipio'>
						<div className='tipoPrincipio'>Sistema de Governança</div>
						<div className='descPrincipio'>
							<div>Fornecer valor para as partes interessadas</div>
							<div>Ter uma abordagem holística</div>
							<div>Sistema de governança dinâmico</div>
							<div>Separar Governança de Gerenciamento</div>
							<div>Adaptado às necessidades específicas do negócio</div>
							<div>Sistema de governança de ponta a ponta</div>
						</div>
					</div>
				</div>
				<Pagination up='/Modulo1' down='/Modulo1_2' />
			</div>
		</Layout>
	);
}
export default Modulo1_1;
