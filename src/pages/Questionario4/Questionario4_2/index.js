import React from 'react';
import Layout from '../../../components/Layout';
import Pagination from '../../../components/Pagination';
import TitleModulo from '../../../components/TitleModulo';
import './styles.css';

function Questionario4_2() {
	return (
		<Layout>
			<div className='container'>
				<div>
					<TitleModulo>
						<span class='title-destaque'>QUESTIONÁRIO</span>
					</TitleModulo>
				</div>
				<h4 className='title-questão'>
					1. O que significa a sigla "CPM" no COBIT?
				</h4>

				<div className='container-questões'>
					<div className='questão'>Centralized Process Management.</div>
					<div className='questão correct'>Cobit Process Model.</div>
					<div className='questão'>Certified Project Manager.</div>
					<div className='questão'>Corporate Process Mapping.</div>
				</div>
				<Pagination up='/Questionario4_1' down='/Questionario4_3' />
			</div>
		</Layout>
	);
}
export default Questionario4_2;
