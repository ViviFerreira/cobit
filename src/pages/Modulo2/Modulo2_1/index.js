import React from 'react';
import Layout from '../../../components/Layout';
import TitleModulo from '../../../components/TitleModulo';
import Pagination from '../../../components/Pagination';
import imgModulo2_1 from '../../../assets/img/ImgModulo2_1.png';
import './styles.css';

function Modulo2_1() {
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
						<img src={imgModulo2_1} />
					</div>
				</div>
				<Pagination up='/Modulo1' down='/Modulo2_2' />
			</div>
		</Layout>
	);
}
export default Modulo2_1;
